import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk(
  "quiz/fetchQuestions",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [
      {
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["javascript", "scripting", "script", "js"],
        correctAnswer: "script",
      },
      {
        id: 2,
        question: "What are variables used for in JavaScript Programs?",
        options: [
          "Storing numbers, dates, or other values",
          "Varying randomly",
          "Causing high-school algebra flashbacks",
          "None of these",
        ],
        correctAnswer: "Storing numbers, dates, or other values",
      },
      {
        id: 3,
        question:
          "Which of the following can't be done with client-side JavaScript?",
        options: [
          "Validating a form",
          "Sending a form's contents by email",
          "Storing numbers, dates, or other values",
          "None of these",
        ],
        correctAnswer: "Sending a form's contents by email",
      },
      // Thêm các câu hỏi khác nếu cần, tổng cộng 10 câu như hình
    ];
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: [],
    userAnswers: {},
    results: {},
    currentQuestionId: 1,
    status: "idle",
  },
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    selectAnswer: (state, action) => {
      const { questionId, option } = action.payload;
      state.userAnswers[questionId] = option;
    },
    checkAnswers: (state) => {
      state.questions.forEach((question) => {
        state.results[question.id] =
          state.userAnswers[question.id] === question.correctAnswer;
      });
    },
    resetQuiz: (state) => {
      state.userAnswers = {};
      state.results = {};
      state.currentQuestionId = 1;
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestionId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = action.payload;
      });
  },
});

export const {
  addQuestion,
  selectAnswer,
  checkAnswers,
  resetQuiz,
  setCurrentQuestion,
} = quizSlice.actions;
export default quizSlice.reducer;
