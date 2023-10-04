<script setup>
import db from "@/firebase/firbaseInt";
import FormInput from "@/components/forms/form-input/FormInput.vue";
import BaseButton from "@/components/buttons/base-button/BaseButton.vue";
import DropdownSelect from "@/components/forms/dropdwon-select/DropdownSelect.vue";
import {onBeforeMount, reactive, ref, watch} from "vue";
import {uid} from 'uid'
import { collection, addDoc } from "firebase/firestore"
defineProps({
  modalTitle: {
    type: String,
  }
})
const emit = defineEmits(['closeModal'])


// Modal Close
const closeModal = () => {
  emit('closeModal')
}

// Invoice data
const invoiceTerms = ref([
  {
    key: 30,
    value: '30 days'
  },
  {
    key: 60,
    value: '60 days'
  },
]);
const invoiceDateUnix = ref(null);
const invoiceDueDateUnix = ref(null);
const invoicePending = ref(null);
const invoiceDrafts = ref(null);
const invoiceTotal = ref(0);
const dateOption = ref({year: "numeric", month: "short", day: "numeric"});
const data = reactive({
  billerAddress: null,
  billerCity: null,
  billerZipCode: null,
  billerCountry: null,
  clientName: null,
  clientEmail: null,
  clientAddress: null,
  clientCity: null,
  clientZipCode: null,
  clientCountry: null,
  invoiceDate: null,
  invoiceDueDate: null,
  invoiceTerms: null,
  invoiceDesc: null,
  invoiceItemList: [],
})

// Invoice Date
onBeforeMount(() => {
  invoiceDateUnix.value = Date.now()
  data.invoiceDate = new Date(invoiceDateUnix.value).toLocaleDateString("en-us", dateOption.value)
})
// Invoice Due date on terms
watch(() => data.invoiceTerms, (count) => {
  const futureDate = new Date();
  invoiceDueDateUnix.value = futureDate.setDate(futureDate.getDate() + parseInt(data.invoiceTerms))
  data.invoiceDueDate = new Date(invoiceDueDateUnix.value).toLocaleDateString('en-us', dateOption.value)
})
const addInvoiceItem = () => {
  data.invoiceItemList.push({
    id: new Date(),
    name: null,
    qty: null,
    price: null,
    total: null
  })
}
const deleteInvoiceItem = (id) => {
  data.invoiceItemList = data.invoiceItemList.filter((item) => item.id !== id)
}
const calInvoiceTotal = () => {
  invoiceTotal.value = 0;
  data.invoiceItemList.forEach((item) => {
    invoiceTotal.value += item.total
  })
}
const uploadInvoice = async () => {
  if (data.invoiceItemList.length <= 0) {
    alert("Please ensure you filled out work items!")
    return;
  }
  calInvoiceTotal()
  //
  // const database = db.collection('invoice').doc()
  //
  // await database.set({
  //
  // })

  console.log('start')

  const colRef = collection(db, 'invoice')
  // data to send
  const dataObj = {
    invoiceId: uid(6),
    billerAddress: data.billerAddress,
    billerCity: data.billerCity,
    billerZipCode: data.billerZipCode,
    billerCountry: data.billerCountry,
    clientName: data.clientName,
    clientEmail: data.clientEmail,
    clientAddress: data.clientAddress,
    clientCity: data.clientCity,
    clientZipCode: data.clientZipCode,
    clientCountry: data.clientCountry,
    invoiceDate: data.invoiceDate,
    invoiceDueDate: data.invoiceDueDate,
    invoiceTerms: data.invoiceTerms,
    invoiceDesc: data.invoiceDesc,
    invoiceItemList: data.invoiceItemList,
    invoiceTotal: invoiceTotal.value,
    invoicePending: invoicePending.value,
    invoiceDraft: invoiceDrafts.value,
    invoicePaid: null,
  }

  await addDoc(colRef, dataObj)
  console.log('end')

}
const submitInvoice = () => {
  uploadInvoice()
  console.log('submit')
}
const invoiceDraft = () => {
  invoiceDrafts.value = true
}
const invoicePublish = () => {
  invoicePending.value = true
}
</script>

<template>
  <div class="invoice-modal absolute top-0 z-10 left-0 w-full max-w-lg shadow-lg p-6 bg-gray-200 h-full">
    <div class="head">
      <h3 class="text-2xl font-medium ">{{ modalTitle }}</h3>
    </div>
    <form @submit.prevent="submitInvoice">
      <div class="form mt-8 pr-3 pl-1 max-h-[calc(100vh-145px)] overflow-y-auto">
        <div class="bill-form mb-6">
          <h3 class="text-cyan-600 font-medium text-base mb-4">Bill From</h3>
          <div class="form-row">
            <form-input :label="'Address'" v-model="data.billerAddress"/>
          </div>
          <div class="form-row flex columns-3 gap-3">
            <form-input :label="'City'" v-model="data.billerCity"/>
            <form-input :label="'Zip Code'" v-model="data.billerZipCode"/>
            <form-input :label="'Country'" v-model="data.billerCountry"/>
          </div>
        </div>
        <div class="bill-form mb-6">
          <h3 class="text-cyan-600 font-medium text-base mb-4">Bill To</h3>
          <div class="form-row">
            <form-input :label="'Client name'" v-model="data.clientName"/>
          </div>
          <div class="form-row">
            <form-input :label="'Client email'" v-model="data.clientEmail"/>
          </div>
          <div class="form-row">
            <form-input :label="'Street Address'" v-model="data.clientAddress"/>
          </div>
          <div class="form-row flex columns-3 gap-3">
            <form-input :label="'City'" v-model="data.clientCity"/>
            <form-input :label="'Zip Code'" v-model="data.clientZipCode"/>
            <form-input :label="'Country'" v-model="data.clientCountry"/>
          </div>
        </div>
        <div class="bill-form mb-6">
          <div class="form-row flex columns-3 gap-3">
            <form-input :label="'Invoice Date'" v-model="data.invoiceDate"/>
            <form-input :label="'Payment Due'" v-model="data.invoiceDueDate"/>
          </div>
          <div class="form-row flex columns-3 gap-3">
            <dropdown-select
                :label="'Payment Terms'"
                :custom-style="true"
                :list-item="invoiceTerms"
                v-model="data.invoiceTerms"/>
          </div>
          <div class="form-row flex columns-3 gap-3">
            <form-input :label="'Product Description'" v-model="data.invoiceDesc"/>
          </div>

        </div>
        <div class="bill-form mb-6">
          <h3 class="text-cyan-600 font-medium text-base mb-4">Item List</h3>
          <div class="item-table">
            <div class="item-table-head flex items-center mb-3 gap-3">
              <div class="table-item w-[35%]"><p class="text-xs font-medium text-gray-800">Item Name</p></div>
              <div class="table-item w-[15%]"><p class="text-xs text-center font-medium text-gray-800">QTY</p></div>
              <div class="table-item w-[20%]"><p class="text-xs text-center font-medium text-gray-800">Price</p></div>
              <div class="table-item w-[20%]"><p class="text-xs text-center font-medium text-gray-800">Total</p></div>
              <div class="table-item w-[10%]"><p class="text-xs text-center font-medium text-gray-800">&nbsp;</p></div>
            </div>
            <div class="item-table-row flex items-center gap-3" v-for="(item, index) in data.invoiceItemList"
                 :key="index">
              <div class="table-item w-[35%]">
                <form-input v-model="item.name"/>
              </div>
              <div class="table-item w-[15%]">
                <form-input v-model="item.qty"/>
              </div>
              <div class="table-item w-[20%]">
                <form-input v-model="item.price"/>
              </div>
              <div class="table-item w-[20%]">
                <p class="text-xs font-medium mb-3 uppercase block text-center">${{
                    item.total = item.qty * item.price
                  }}</p>
              </div>
              <div class="table-item w-[10%]">
                <BaseButton @action="deleteInvoiceItem(item.id)"
                            :class="'mb-3'"
                            :button-theme="'text'" :button-fill="'flat'"
                            :button-size="'small'">
                  <span class="material-symbols-outlined text-xl">delete</span>
                </BaseButton>
              </div>
            </div>
            <div class="item-table-action">
              <base-button @action="addInvoiceItem" :class="'w-full justify-center'" :button-theme="'primary'"
                           :button-radius="'pill'"
                           :button-size="'small'">Add New Item
              </base-button>
            </div>
          </div>

        </div>
      </div>
      <div class="modal-footer flex items-center py-3 border-t border-gray-300">
        <base-button @action="closeModal" :button-size="'small'" :button-theme="'danger'" :button-radius="'pill'">Cancel
        </base-button>
        <base-button :button-type="'submit'" @action="invoiceDraft" :class="'ms-auto me-3'" :button-theme="'solid'" :button-radius="'pill'"
                     :button-size="'small'">Save
          Draft
        </base-button>
        <base-button :button-type="'submit'" @action="invoicePublish" :button-theme="'primary'" :button-radius="'pill'" :button-size="'small'">
          Create Invoice
        </base-button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">

</style>