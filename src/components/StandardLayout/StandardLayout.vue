<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ titlePage }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <slot />
        </ion-content>
    </ion-page>

</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
    },
    props: ['titlePage']


}
</script>

<style scoped>
ion-toolbar {
    --background: var(--ion-color-primary);
    color: white;
    text-align: center;
}
</style>