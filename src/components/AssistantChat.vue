<script setup lang="ts">
    import { ref, onMounted, nextTick } from 'vue';
    import { Transition } from 'vue';
    import { aiChat } from '../services/api';
    import MarkdownIt from 'markdown-it';
    import DOMPurify from 'dompurify';
    interface Message {
        role: string;
        content: string;
        timestamp: Date;
    }

    let mdRenderer: any = null
    let purifier: any = null

    mdRenderer = new MarkdownIt({ linkify: true, breaks: true })
    purifier = DOMPurify

    const commonActions = [
        'What are the most common names in Ethiopia?',
        'How common is the name Abebe Kebede?',
        'Are there many people named Chaltu in Adama?',
        'What are the top 10 names in Addis Ababa?',
        'Show me statistics for Dire Dawa',
        'Tell me about ENE\'s services'
    ];
    const isOpen = ref(false);
    const greetingMessage: Message = {
        role: 'assistant', 
        content: `
I am **Grid**, your natural language interface for the **Ethiopian Names Explorer**. 

Try asking me something like:

  • What are the top 10 names in Addis Ababa?
  • How common is the name Abebe Kebede?
  • Are there many people named Chaltu in Adama?
  • Show me statistics for Dire Dawa
  • Tell me about ENE's services`, 
        timestamp: new Date() }
    const messages = ref<Message[]>([greetingMessage]);    
    const inputMessage = ref('');
    const isTyping = ref(false);
    const hasNewMessage = ref(false);
    
    const toggleChat = () => {
        isOpen.value = !isOpen.value;
        if (isOpen.value) {
            hasNewMessage.value = false;
        }
    };
    
    const closeChat = () => {
        isOpen.value = false;
    };

    const conversationHistory = messages.value
        .filter(msg => msg.content !== greetingMessage.content)
        .map(msg => ({
            role: msg.role,
            content: msg.content,
            timestamp: msg.timestamp
        }));

    const sendMessage = async () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        const message = inputMessage.value.trim()

        if (!message || isTyping.value) return;
        messages.value.push({ role: 'user', content: message, timestamp: new Date() });
        inputMessage.value = '';
        isTyping.value = true;
        
        await aiChat(message, conversationHistory).then(response => {
          messages.value.push({ role: 'assistant', content: response.response, timestamp: new Date() });
          isTyping.value = false;
          nextTick(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          });
        }).catch(() => {
          messages.value.push({ role: 'assistant', content: 'Sorry, I encountered an error. Please try again.', timestamp: new Date() });
          isTyping.value = false;
        });
    };

    const basicEscape = (s: string) =>
    s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

    const renderMarkdown = (text: string) => {
      if (!text) return ''
        // Fallback: escape HTML and preserve newlines
        let html = basicEscape(text).replace(/\n/g, '<br/>')
        if (mdRenderer) {
          try {
            html = mdRenderer.render(text)
          } catch {
            // keep fallback html
          }
        }
        if (purifier) {
          try {
            return purifier.sanitize(html)
          } catch {
            return html
          }
        }
        return html
          };
    
    const formatTime = (timestamp: Date) => {
        return timestamp.toLocaleTimeString();
    };
    
</script>
<template>
  <div class="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50">
    <!-- Chat Interface -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95 translate-y-4"
      enter-to-class="transform opacity-100 scale-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 scale-100 translate-y-0"
      leave-to-class="transform opacity-0 scale-95 translate-y-4"
    >
      <div
        v-if="isOpen"
        class="mb-4 w-[92vw] sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] 2xl:w-[40rem] h-[65vh] sm:h-[70vh] lg:h-[65vh] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
      >
        <!-- Chat Header -->
        <div class="px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <i class="pi pi-sparkles w-4 h-4 text-white" > </i>
            </div>
            <div>
              <h3 class="text-white font-semibold">Grid</h3>
              <p class="text-primary-100 text-xs">Grounding your request</p>
            </div>
          </div>
          <button
            @click="closeChat"
            class="text-white/80 hover:text-white transition-colors"
          >
            <i class="pi pi-times w-5 h-5" > </i>
          </button>
        </div>

        <!-- Chat Messages -->
        <div
          ref="messagesContainer"
          class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
        >
          <div
            v-for="(message, index) in messages"
            :key="index"
            :class="[
              'flex',
              message.role === 'user' ? 'justify-end' : 'justify-start'
            ]"
          >
            <div
              :class="[
                'max-w-[80%] rounded-2xl px-4 py-3 shadow-sm',
                message.role === 'user'
                  ? 'bg-primary-600 text-white rounded-br-sm'
                  : 'bg-white text-gray-900 rounded-bl-sm border border-gray-200 '
              ]"
            >
              <div class="text-sm markdown-body" v-html="renderMarkdown(message.content)"/>
              <span
                :class="[
                  'text-xs mt-1 block',
                  message.role === 'user' ? 'text-primary-100' : 'text-gray-500 '
                ]"
              >
                {{ formatTime(message.timestamp) }}
              </span>
            </div>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isTyping" class="flex justify-start">
            <div class="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-gray-200 ">
              <div class="flex items-center gap-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Input -->
        <div class="p-4 bg-white border-t border-gray-200 ">
          <form @submit.prevent="sendMessage" class="flex items-end gap-2">
            <div class="flex-1">
              <textarea
                v-model="inputMessage"
                @keydown.enter.exact.prevent="sendMessage"
                placeholder="Type your message..."
                rows="1"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 resize-none"
                :disabled="isTyping"
              />
            </div>
            <button
              type="submit"
              :disabled="!inputMessage.trim() || isTyping"
              class="p-3 rounded-xl bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white transition-colors"
            >
              <i class="pi pi-send w-5 h-5" > </i>
            </button>
          </form>
          <!-- common actions -->
          <div class="flex items-center flex-row gap-2 flex-wrap justify-center mt-3 " >
            <Button v-for="action in commonActions" :key="action" class="text-xs bg-blue-100 text-blue-700 px-3 py-1.5" @click="inputMessage = action">
              {{ action }}
            </Button>
          </div>
          <p class="text-xs text-gray-500 mt-2 text-center">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </Transition>

    <!-- Floating Button -->
    <button
      @click="toggleChat"
      :class="[
        'w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110',
        isOpen
          ? 'bg-gray-600 hover:bg-gray-700'
          : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800'
      ]"
    >
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 rotate-180"
        enter-to-class="transform opacity-100 rotate-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="transform opacity-100 rotate-0"
        leave-to-class="transform opacity-0 rotate-180"
        mode="out-in"
      >
        <i
          v-if="!isOpen"
          class="pi pi-comments w-4 h-4 text-white"
        >
        </i>
        <i
          v-else
          class="pi pi-chevron-down w-4 h-4 align-middle text-white"
        >
        </i>
      </Transition>
      
      <!-- Notification Badge -->
      <span
        v-if="!isOpen && hasNewMessage"
        class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse"
      >
        !
      </span>
    </button>
  </div>
</template>
