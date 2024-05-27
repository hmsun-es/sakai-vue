<template>
  <div class="form-basic-contents">
    <div class="card">
      <h1>전시회 구분 관리</h1>

      <div class="flex">
        <Button severity="success" label="전시회 등록" icon="pi pi-plus"></Button>
      </div>
      <DataTable :value="exhibitions" scrollable class="mt-4">
        <Column header="순번">
          <template #body="item">{{ item.index + 1 }}</template>
        </Column>
        <Column field="name" header="전시회명"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Exhibition } from "@/models"
import { ref } from "vue"

const exhibitions = ref<Exhibition[]>([])

const filters = ref({
  exhibitionName: "",
})

function search() {
  exhibitions.value = [{ name: "전시회1" }, { name: "전시회2" }, { name: "전시회3" }]
}

search()
</script>
