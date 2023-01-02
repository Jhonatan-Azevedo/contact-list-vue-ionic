<template>
    <standard-layout backPage="/home" titlePage="Adicionar Contato">
        <div class="m-2">
            <label class="form-control px-2 d-flex">
                <i class="bi bi-person-fill"></i>
                <input type="text" class="border-0 ms-2 w-100" placeholder="Digite seu nome" v-model="newContact.name">
            </label>
        </div>
        <div class="m-2">
            <label class="form-control px-2 d-flex">
                <i class="bi bi-telephone-fill"></i>
                <input type="text" class="border-0 ms-2 w-100" placeholder="Digite seu telefone"
                    v-model="newContact.contact_phone">
            </label>
        </div>
        <div class="m-2">
            <label class="form-control px-2 d-flex">
                <i class="bi bi-envelope-fill"></i>
                <input type="text" class="border-0 ms-2 w-100 outline-0 shadow-none" placeholder="Digite a URL da foto"
                    v-model="newContact.photo">
            </label>
        </div>
        <div class="w-100 px-2">
            <button class="btn btn-success w-100" @click="saveContact()">
                Adicionar
            </button>
            <div v-show="isVisibleAlert" :class="`alert my-3 p-2 text-center ${alertStyle}`" role="alert">
                {{ messageAlert }}
            </div>
        </div>
    </standard-layout>
</template>

<script>


export default {
    name: "AddContact",
    data() {
        return {
            newContact: {
                name: "",
                contact_phone: "",
                photo: ""
            },

            isVisibleAlert: false,
            alertStyle: '',
            messageAlert: "",
        }
    },


    methods: {
        hasEmptyField() {
            if (!this.newContact.name) return true
            if (!this.newContact.contact_phone) return true
            if (!this.newContact.photo) return true

            return false
        },

        saveContact() {
            console.log(this.hasEmptyField())
            if (this.hasEmptyField()) {
                return this.showAlert('alert-danger', "Preencha todos os campos para adicionar um novo contato!")
            }

            const id = this.$store.getters.getLastId + 1;
            const contact = {
                id: id,
                name: this.newContact.name,
                contact_phone: this.newContact.contact_phone,
                photo: this.newContact.photo
            }

            this.$store.dispatch('updateNewContact', contact)

            this.showAlert('alert-success', "Adicionado com sucesso!")
            setTimeout(() => {
                return this.$router.push('/home')
            }, 4000)
        },

        showAlert(alert, msg) {
            this.isVisibleAlert = true
            this.alertStyle = alert
            this.messageAlert = msg

            return setTimeout(() => {
                this.alertStyle = ""
                this.messageAlert = ""
                return this.isVisibleAlert = false
            }, 4000)
        },
    },
}
</script>

<style scoped>
*:focus {
    outline: none !important;
}
</style>