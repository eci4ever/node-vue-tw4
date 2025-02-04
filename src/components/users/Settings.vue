<template>
  <div class="p-6 bg-white min-h-[60vh]">
    <!-- Calendar Header -->
    <div class="flex justify-between items-center mb-8">
      <button
        @click="prevMonth"
        class="px-5 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300"
      >
        Previous
      </button>
      <h2 class="text-3xl font-bold text-gray-800">{{ currentMonthName }} {{ currentYear }}</h2>
      <button
        @click="nextMonth"
        class="px-5 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300"
      >
        Next
      </button>
    </div>

    <!-- Days of the Week -->
    <div class="grid grid-cols-7 text-center text-lg font-medium text-gray-600 mb-6">
      <div>Sun</div>
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
    </div>

    <!-- Calendar Days -->
    <div class="grid grid-cols-7 gap-4">
      <div
        v-for="(day, index) in daysInMonth"
        :key="index"
        class="border border-slate-300 p-10 rounded-xl cursor-pointer hover:bg-gray-100 transition duration-300 relative"
        :class="{
          'bg-blue-100': isToday(day),
          'text-gray-400': !isCurrentMonth(day),
        }"
        @click="selectDate(day)"
      >
        <span class="text-xl font-semibold">{{ day ? day.getDate() : '' }}</span>
        <div v-if="events[formatDate(day)]" class="mt-3 space-y-2">
          <div
            v-for="(event, idx) in events[formatDate(day)]"
            :key="idx"
            class="text-base text-red-500 flex items-center justify-between"
          >
            <span>{{ event }}</span>
            <button
              @click.stop="editEvent(formatDate(day), idx)"
              class="ml-2 text-gray-500 hover:text-red-500"
            >
              ✎
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Event Input Modal -->
    <div
      v-if="selectedDate"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h3 class="text-2xl font-bold mb-6">
          {{ editingEvent ? 'Edit Event' : 'Add Event' }} for {{ formatDate(selectedDate) }}
        </h3>
        <input
          v-model="newEvent"
          type="text"
          placeholder="Enter event details"
          class="w-full px-5 py-4 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
        <div class="flex justify-end">
          <button
            @click="saveEvent"
            class="px-5 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-lg"
          >
            Save
          </button>
          <button
            @click="closeModal"
            class="ml-4 px-5 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300 text-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// State for calendar
const currentDate = ref(new Date());
const selectedDate = ref(null);
const newEvent = ref('');
const events = ref({});
const editingEvent = ref(false);
const editingDate = ref('');
const editingIndex = ref(null);

// Computed properties
const currentMonthName = computed(() => currentDate.value.toLocaleString('default', { month: 'long' }));
const currentYear = computed(() => currentDate.value.getFullYear());

const daysInMonth = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();

  // Get the first day of the month
  const firstDay = new Date(year, month, 1);
  const startingDay = firstDay.getDay();

  // Get the last day of the month
  const lastDay = new Date(year, month + 1, 0);
  const totalDays = lastDay.getDate();

  // Create an array of days
  const days = [];
  for (let i = 0; i < startingDay; i++) {
    days.push(null); // Empty slots for previous month's days
  }
  for (let i = 1; i <= totalDays; i++) {
    days.push(new Date(year, month, i));
  }
  return days;
});

// Helper functions
function isToday(day) {
  const today = new Date();
  return day && day.toDateString() === today.toDateString();
}

function isCurrentMonth(day) {
  return day && day.getMonth() === currentDate.value.getMonth();
}

function formatDate(date) {
  if (!date) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Calendar navigation
function prevMonth() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
}

function nextMonth() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
}

// Event handling
function selectDate(day) {
  if (isCurrentMonth(day)) {
    selectedDate.value = day;
    newEvent.value = '';
    editingEvent.value = false;
  }
}

function addEvent() {
  if (newEvent.value.trim()) {
    const dateKey = formatDate(selectedDate.value);
    if (!events.value[dateKey]) {
      events.value[dateKey] = [];
    }
    events.value[dateKey].push(newEvent.value);
    closeModal();
  }
}

function editEvent(dateKey, index) {
  editingEvent.value = true;
  editingDate.value = dateKey;
  editingIndex.value = index;
  newEvent.value = events.value[dateKey][index];
  selectedDate.value = new Date(dateKey.split('-')[0], dateKey.split('-')[1] - 1, dateKey.split('-')[2]);
}

function saveEvent() {
  if (editingEvent.value) {
    events.value[editingDate.value][editingIndex.value] = newEvent.value;
  } else {
    addEvent();
  }
  closeModal();
}

function closeModal() {
  selectedDate.value = null;
  newEvent.value = '';
  editingEvent.value = false;
}
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>