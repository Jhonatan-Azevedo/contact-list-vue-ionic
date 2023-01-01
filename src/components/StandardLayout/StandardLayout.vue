<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons class="mx-2" v-if="backPage">
                    <i class="bi bi-arrow-left"></i>
                    <ion-back-button :default-href="backPage"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ titlePage }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <slot />
        </ion-content>
    </ion-page>

</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/vue';

export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButtons,
        IonBackButton
    },
    props: ['titlePage', 'backPage']


}
</script>

<style scoped>
ion-toolbar {
    --background: var(--ion-color-primary);
    color: white;
    text-align: center;
}
</style>