<script setup>
import SectionTitle from './Subcomponents/SectionTitle.vue';
import SectionSubtitle from './Subcomponents/SectionSubtitle.vue';
</script>

<template>
    <section id="about" class="mb-16 scroll-mt-20">
        <SectionTitle section_name="About" section_color="bg-gray-600"/>

        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <SectionSubtitle 
                subtitle="About Ethiopian Names"
                description="Understanding Ethiopian naming conventions and the purpose of this project"
            />        
            <div class="p-6">
                <div class="prose max-w-none">
                <h4 class="text-lg font-display font-semibold mb-2 text-gray-900">Ethiopian Naming Conventions</h4>
                <p class="text-gray-600">In Ethiopia, a person's full name typically consists of three parts:</p>
                <ul class="mt-2 space-y-2 list-disc pl-6 text-gray-600">
                    <li>
                    <span class="font-medium text-gray-900">Given Name</span>: The first name given at birth
                    </li>
                    <li>
                    <span class="font-medium text-gray-900">Father's Name</span>: The given name of the person's father
                    </li>
                    <li>
                    <span class="font-medium text-gray-900">Grandfather's Name</span>: The given name of the person's paternal grandfather
                    </li>
                </ul>
                
                <div class="my-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <h5 class="font-medium text-gray-900 mb-2">Example</h5>
                    <p class="text-gray-600">If someone is named "Abebe Kebede Wolde", then:</p>
                    <ul class="mt-2 space-y-1 list-disc pl-6 text-gray-600">
                    <li>"Abebe" is their given name</li>
                    <li>"Kebede" is their father's given name</li>
                    <li>"Wolde" is their grandfather's given name</li>
                    </ul>
                </div>
                
                <p class="text-gray-600">
                    This naming system means that family names or surnames in the Western sense do not exist in traditional
                    Ethiopian naming practices. Each generation takes their father's given name as their second name.
                </p>
                
                <hr class="my-6 border-gray-200" />
                
                <h4 class="text-lg font-display font-semibold mb-2 text-gray-900">About This Project</h4>
                <p class="text-gray-600">
                    The Ethiopian Names Explorer is an open-source web application designed to explore and analyze naming
                    patterns and demographics in Ethiopia. The project aims to:
                </p>
                <ul class="mt-2 space-y-2 list-disc pl-6 text-gray-600">
                    <li>Provide insights into the distribution and frequency of Ethiopian names</li>
                    <li>Visualize demographic patterns across different regions</li>
                    <li>Preserve and celebrate the rich cultural heritage of Ethiopian naming traditions</li>
                    <li>Create an educational resource for understanding Ethiopian culture</li>
                </ul>
                
                <p class="mt-4 text-gray-600">
                    This application is built using modern web technologies and is designed to be accessible, responsive, and
                    user-friendly. The dataset includes 100,000 records of Ethiopian people, with each record containing a
                    person's full name and their general location.
                </p>
                
                <hr class="my-6 border-gray-200" />
                
                <h4 class="text-lg font-display font-semibold mb-2 text-gray-900">Data Sources & Privacy</h4>
                <p class="text-gray-600">
                    The data used in this application is anonymized and aggregated to protect privacy. No personal identifying
                    information is stored or displayed. The dataset is used solely for statistical analysis and visualization
                    purposes.
                </p>
                <p class="mt-4 text-gray-600">
                    This is a demonstration project. In a production environment, the application would connect to a secure
                    database containing the actual dataset of 100,000 records.
                </p>
                </div>
            </div>
        </div>
    </section>
</template>