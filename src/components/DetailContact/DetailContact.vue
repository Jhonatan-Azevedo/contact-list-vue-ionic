<template>
    <standard-layout titlePage="Informações do contato" backPage="/home">
        <div class="card mx-auto mt-2" style="width: 18rem;">
            <img :src="contact.photo" :alt="contact.name" class="card-img-top">
            <div class="card-body bg-secondary text-light p-3">
                <h5 class="card-title"><i class="bi bi-person-fill"></i> {{ contact.name }}</h5>
                <p class="card-text"><i class="bi bi-telephone-fill"></i> {{ maskedPhone(contact.contact_phone) }}</p>
            </div>
        </div>
    </standard-layout>

</template>
<script>
export default {
    name: "DetailContact",
    props: ['id'],

    mounted() {
        console.log(this.id);
    },
    computed: {
        contact() {
            return this.$store.getters.findContact(this.id)
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
img {}
</style>