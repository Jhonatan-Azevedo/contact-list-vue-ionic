<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Meus Contatos
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-label>
                        Lucas
                    </ion-label>
                </ion-item>

                <ion-item>
                    <ion-label>
                        Pedro
                    </ion-label>
                </ion-item>

                <ion-item>
                    <ion-label>
                        João
                    </ion-label>
                </ion-item>

                <ion-item>
                    <ion-label>
                        Saulo
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
    },
}
</script>

<style scoped>
ion-toolbar {
    --background: var(--ion-color-primary);
    ---color: var(--white);
    text-align: center;
}
</style>