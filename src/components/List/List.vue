<template>
    <standard-layout :titlePage="'Meus Contatos'">
        <ion-list class="mx-1">
            <ion-item v-for="contact in contacts" router-link="`/contato/${contact.id}`" :key="contact.id">
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
    </standard-layout>
</template>

<script>

import { IonList, IonItem, IonThumbnail, IonImg } from '@ionic/vue';
import listContact from "./../../../db_contacts.json"

export default {
    components: {
        IonList,
        IonItem,
        IonThumbnail,
        IonImg
    },

    mounted() {
        this.contacts = [...listContact];
        console.log(this.contacts)
    },

    data() {
        return {
            contacts: []
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