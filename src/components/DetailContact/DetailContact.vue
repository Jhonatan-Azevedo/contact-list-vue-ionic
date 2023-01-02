<template>
    <standard-layout titlePage="Informações do contato" backPage="/home">
        <div class="card mx-auto mt-2" style="width: 18rem;">
            <img :src="contact.photo" :alt="contact.name" class="card-img-top">
            <div class="card-body bg-secondary text-light p-3">
                <h5 class="card-title mb-2"><i class="bi bi-person-fill"></i> {{ contact.name }}</h5>
                <p class="card-text mb-2"><i class="bi bi-telephone-fill"></i> {{ maskedPhone(contact.contact_phone) }}
                </p>
                <button class="btn btn-danger px-1" @click="removeContact()">
                    <i class="bi bi-trash"></i>
                    Excluir
                </button>
            </div>

            <div>
            </div>
        </div>
    </standard-layout>

</template>
<script>
import { alertController } from '@ionic/vue';

export default {
    name: "DetailContact",
    props: ['id'],

    data() {
        return {
            contact: {
                name: "",
                contact_phone: "",
                photo: ""
            },
        }
    },

    mounted() {
        this.contact = this.$store.getters.findContact(this.id)
    },


    methods: {
        maskedPhone(phone) {
            if (phone.length == 11) {
                phone = phone.replace(/\D/g, '')
                phone = phone.replace(/(\d{2})(\d)/, "($1) $2")
                phone = phone.replace(/(\d)(\d{4})$/, "$1-$2")

                return phone
            }
        },

        async removeContact() {
            const alert = await alertController.create({
                header: 'Atenção!',
                message: 'deseja realmente excluir esse contato ?',
                buttons: [
                    {
                        text: 'Sim',
                        handler: () => {
                            this.$store.dispatch("removeContact", this.id)

                            this.contact = {
                                name: "",
                                contact_phone: "",
                                photo: "",
                            }

                            this.$router.push("/home")
                        },
                    },
                    {
                        text: 'Não',
                        handler: () => {
                            return
                        },
                    },
                ],
            });

            await alert.present();


        }
    },
}
</script>
<style scoped>

</style>