<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <div class="d-flex align-items-between">
                    <ion-buttons v-show="backPage" class="float-start ps-3" router-link="/home">
                        <i class="bi bi-arrow-left"></i>
                    </ion-buttons>
                    <ion-title>{{ titlePage }}</ion-title>
                </div>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <slot />
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons } from '@ionic/vue';

export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButtons,
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