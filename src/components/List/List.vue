<template>
    <standard-layout titlePage="Meus Contatos">
        <ion-list class="mt-2">
            <ion-item v-for="contact in contacts" :key="contact.id" :router-link="`/contato/${contact.id}`"
                class="mb-2">
                <ion-thumbnail class="mx-1">
                    <ion-img :src="contact.photo"></ion-img>
                </ion-thumbnail>
                <ion-thumbnail class="w-100">
                    {{ contact.name }}
                    <div class="small text-secondary">
                        {{ maskedPhone(contact.contact_phone) }}
                    </div>
                </ion-thumbnail>
            </ion-item>
        </ion-list>

        <ion-button expand="full" color="success" class="m-2" router-link="/addContact">
            <i class="bi bi-plus-circle"></i>
        </ion-button>
    </standard-layout>
</template>

<script>

import { IonList, IonItem, IonThumbnail, IonImg, IonButton } from '@ionic/vue';

export default {
    components: {
        IonList,
        IonItem,
        IonThumbnail,
        IonImg,
        IonButton
    },

    computed: {
        contacts() {
            return this.$store.getters.getContacts
        }
    },

    methods: {
        maskedPhone(phone) {
            if (phone.length == 11) {
                phone = phone.replace(/\D/g, '')
                phone = phone.replace(/(\d{2})(\d)/, "($1) $2")
                phone = phone.replace(/(\d)(\d{4})$/, "$1-$2")

                return phone
            }
        }
    },
}
</script>

<style scoped>

</style>