const dom = {
    title:document.getElementById('title'),
    progress:{
        progressFill:document.getElementById('progress-fill'),
        questionNumber:document.getElementById('question-number'),
        totalQuestions:document.getElementById('total-questions'),

    },
    step:{
        question:document.getElementById('question'),
        questionPosition:document.getElementById('question-position'),
    },
    answers:document.getElementById('answers'),
    next:document.getElementById('next'),

    }

    let totalSteps = data.questions.length
    let step = 0

    //клік по кнопці
    dom.next.onclick = () =>{
        step = step < totalSteps ? step + 1 :step
        renderProgress(totalSteps,step)
        renderQuestion(step)
    }

   //дані прогресу
    function renderProgress(total,step){
        const progressPercent = 100/total*step
        dom.progress.questionNumber.innerHTML = step
        dom.progress.totalQuestions.innerHTML = total
        dom.progress.progressFill.style.width = `${progressPercent}%`

    }

    renderProgress(totalSteps,step)





    //питання
    function renderQuestion(step){
     dom.step.question.innerHTML = data.questions[step].question
    }
    renderQuestion(step) 



    //функція створення html відповіді

    function buildAnswerHtml(answer){
        const elem = document.createElement('div')
        elem.classList.add('quiz__answer')
        elem.dataset() 
    }

