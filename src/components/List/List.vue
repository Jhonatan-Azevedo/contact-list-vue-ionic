<template>
    <standard-layout titlePage="Meus Contatos">
        <ion-list class="mx-1">
            <ion-item v-for="contact in contacts" :key="contact.id" :router-link="`/contato/${contact.id}`">
                <ion-thumbnail class="mx-1">
                    <ion-img :src="contact.photo"></ion-img>
                </ion-thumbnail>
                <ion-thumbnail class="w-100">
                    {{ contact.name }} - {{ contact.id }}
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