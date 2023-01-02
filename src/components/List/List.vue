<template>
    <standard-layout titlePage="Meus Contatos">
        <ion-list class="mt-2">
            <ion-item v-for="contact in contacts" :key="contact.id" @click="$router.push(`/contato/${contact.id}`)"
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
        <div class="w-100 p-2">
            <button class="btn btn-success w-100" @click="$router.push('/addContact')">
                <i class="bi bi-plus-circle"></i>
            </button>
        </div>
    </standard-layout>
</template>

<script>

import { IonList, IonItem, IonThumbnail, IonImg } from '@ionic/vue';

export default {
    components: {
        IonList,
        IonItem,
        IonThumbnail,
        IonImg,
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