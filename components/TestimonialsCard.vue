<script setup>
    const photo01 = "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
</script>

<template>
    <div>
        <article bg-white w-lg rounded-xl>
            <!-- CONTENT -->
            <section w-full h-full flex flex-row items-center>

                <!-- IMAGE -->
                <section w-lg h-32 p-3>
                    <div flex justify-center items-center overflow-hidden w-full h-full >
                        <img w-full :src="photo01" alt="img/png">
                    </div>
                </section>

                <!-- TEXT -->
                <section flex flex-col p-3>

                    <!-- Comment -->
                    <article mb-3>
                        <p>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae provident ipsa vero iusto rerum quidem! Voluptates ratione blanditiis velit odio aliquid, vero eius, nam nobis est consequuntur, eligendi doloribus!"
                        </p>
                    </article>

                    <!-- bot section -->
                    <article flex flex-row w-full justify-between>
                        <!-- Author -->
                        <p text-prime font-800>
                            Customer Name
                        </p>
                        <!-- Rating -->
                        <p>
                            ★★★★★
                        </p>
                    </article>
                </section>
            </section>
        </article>
    </div>
</template>

<style scoped>

</style>