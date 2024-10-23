<template>
  <div class="date-picker-container">
    <!-- Основной инпут -->
    <input
      type="text"
      v-model="formattedDate"
      @focus="showDatePickerWithDelay"
      placeholder="Выберите дату"
      readonly
    />

    <!-- Выпадающий выбор даты -->

    <div
      :class="[
        'date-picker',
        { 'fade-in': showDatePicker, 'fade-out': !showDatePicker },
      ]"
    >
      <div class="selects">
        <div class="custom-select" @click="toggleDayDropdown">
          <span v-if="selectedDay">День: {{ selectedDay }}/</span>
          <span v-else>День ___</span>
          <span class="arrow"></span>
          <div v-if="showDayDropdown" class="options-day">
            <div
              class="options-day-option"
              v-for="day in days"
              :key="day"
              @click="selectDay(day)"
            >
              {{ day }}
            </div>
          </div>
        </div>

        <div class="custom-select-month" @click="toggleMonthDropdown">
          <span v-if="selectedMonth">Месяц: {{ months[selectedMonth] }}/</span>
          <span v-else>Месяц_________</span>
          <span class="arrow"></span>
          <div v-if="showMonthDropdown" class="options-month">
            <div
              v-for="(month, index) in months"
              :key="index"
              @click="selectMonth(index)"
              class="options-month-option"
            >
              {{ month }}
            </div>
          </div>
        </div>

        <div class="custom-select-year" @click="toggleYearDropdown">
          <span v-if="selectedYear">Год: {{ selectedYear }}</span>
          <span v-else>Год_____ </span>
          <span class="arrow"></span>
          <div v-if="showYearDropdown" class="options-year">
            <div
              v-for="year in years"
              :key="year"
              @click="selectYear(year)"
              class="options-year-option"
            >
              {{ year }}
            </div>
          </div>
        </div>
      </div>
      <button class="date-picker-button" @click="setDate">Выбрать</button>
    </div>
  </div>
</template>

<script setup>
const selectedDay = ref(""); // Выбранный день
const selectedMonth = ref(""); // Выбранный месяц
const selectedYear = ref(""); // Выбранный год
const formattedDate = ref(""); // Форматированная дата для инпута
const showDatePicker = ref(false); // Отображение выбора даты

// Массив дней от 1 до 31
const days = Array.from({ length: 31 }, (v, k) => k + 1);

// Массив месяцев
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

// Управление выпадающими списками
const showDayDropdown = ref(false);
const showMonthDropdown = ref(false);
const showYearDropdown = ref(false);

const toggleDayDropdown = () => {
  showDayDropdown.value = !showDayDropdown.value;
  showMonthDropdown.value = false;
  showYearDropdown.value = false;
};

const toggleMonthDropdown = () => {
  showMonthDropdown.value = !showMonthDropdown.value;
  showDayDropdown.value = false;
  showYearDropdown.value = false;
};

const toggleYearDropdown = () => {
  showYearDropdown.value = !showYearDropdown.value;
  showDayDropdown.value = false;
  showMonthDropdown.value = false;
};

const selectDay = (day) => {
  selectedDay.value = day;
  showDayDropdown.value = false;
};

const selectMonth = (index) => {
  selectedMonth.value = index;
  showMonthDropdown.value = false;
};

const selectYear = (year) => {
  selectedYear.value = year;
  showYearDropdown.value = false;
};

// Генерация массива годов
const years = ref([]);
const getYearsRange = (startYear, endYear) => {
  const yearsArray = [];
  for (let year = endYear; year >= startYear; year--) {
    yearsArray.push(year);
  }
  return yearsArray;
};

onMounted(() => {
  years.value = getYearsRange(1900, new Date().getFullYear());
});

// Показываем выпадающий список с задержкой
const showDatePickerWithDelay = () => {
  setTimeout(() => {
    showDatePicker.value = true;
  }, 0); // Задержка, чтобы элемент успел рендериться
};

// Обработчик для скрытия выпадающего меню
const hideDatePicker = () => {
  setTimeout(() => {
    showDatePicker.value = false;
  }, 10);
};

// Форматирование и установка даты
const setDate = () => {
  hideDatePicker();
  if (selectedDay.value && selectedMonth.value !== "" && selectedYear.value) {
    formattedDate.value = `${selectedDay.value} /${
      parseInt(selectedMonth.value) + 1
    } /${selectedYear.value}`;
    showDatePicker.value = false;
  }
};
</script>

<style lang="scss" scoped>
@import "/assets/DatePicker.scss";
</style>
