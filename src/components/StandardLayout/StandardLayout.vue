<template>
    <ion-page class="p-0 m-0">
        <ion-header>
            <ion-toolbar>
                <div class="d-flex align-items-between">
                    <ion-buttons class="ps-1" v-show="backPage" @click="$router.push('/home')">
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