<template>
  <div class="screen">
    <div id="term">
      <label>
        <p>&lt;{{ user }}&gt; {{ fakeText }}</p>
        <input type="text" v-model="typedText"  autofocus @input="keyPress(typedText)" @keyup.enter="enterPressed(typedText)">
        <p v-if="isTypingEnded">&lt;Multivac&gt; {{ mvAnswer }}</p>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  props: ['user'],
  data() {
    return {
      typedText: '',
      fakeText: '',
      randomIntro: null,
      realAnswer: '',
      isWrongAnswer: false,
      isAnswerSaved: false,
      isTypingEnded: false,
      mvAnswer: null
    }
  },
  methods: {
    keyPress(typedText) {

      // Update faketext
      let typedCount = typedText.length
      this.fakeText = this.randomIntro.substring(0,typedCount)

      //identifying first character
      if (typedCount == 1) {
        if(typedText == "k") {
          console.log("Começou bem")
          this.fakeText = ""
        }
        else {
          console.log("wrong answer")        
          this.fakeText = typedText          
          this.isWrongAnswer = true
        }
      }

      if (typedCount == 2) {
        if(typedText == "kk") {
          console.log("está com kk. bom.")
        }

        else {
          console.log("wrong answer")        
          this.fakeText = typedText
          this.isWrongAnswer = true
        }
      }

      if (typedCount >2) {
        if(this.isWrongAnswer == true) {        
          this.fakeText = typedText          
          console.log("wrong answer>2")
        }
        else {
          if (typedText.slice(-2) == "kk" && this.isAnswerSaved == false) {            
            this.realAnswer = typedText.substring(2,typedCount-2)
            this.isAnswerSaved = true    
            console.log("resposta salva"+this.realAnswer)
            this.typedText = this.fakeText          
          }
        }

        if (this.isAnswerSaved == true) {                 
          this.fakeText = this.typedText
        }
      }


    },
    enterPressed() {
      console.log("enterPRessed")      
      let typedCount = typedText.length

      if (typedCount<3) {
        this.isWrongAnswer = true
      }

      if (this.isWrongAnswer) {
        this.isTypingEnded = true
        this.mvAnswer = "ERROR MESSAGE: You didn't take your certifyed terminator navigator course seriouslly. Leave the Multivac room imediatelly"
      }

      if (this.isAnswerSaved) {
        // encerrar input. dar um tempo e inserir MV responde.

      }

      if (typedText.slice(-2) == "kk" && this.isAnswerSaved == false)
      
      



      if (this.typingStatus == "no introduction") {
        this.isTypingEnded = true
        this.mvAnswer = "ERROR MESSAGE: You didn't take your certifyed terminator navigator course seriouslly. Leave the Multivac room imediatelly"
      }
      else {
        if (this.typingStatus == "typing answer") {
          console.log("works fine")
          this.typedText = this.typedText.concat("kk")
          console.log(this.typedText)
        }
        else {console.log(this.typingStatus)}
      }
    }
  },
  mounted() {
    let randomIntroSet = [
      "E aí, robô, como vai? Queria ver se você consegue me ajudar com uma dúvida que surgiu. Aí vai: ",
      "Olá, máquina brilhante! Tenho uma pergunta que tem me intrigado e acho que você pode ser a solução. Que tal? ",
      "Epa, programão! Estou diante de um desafio e acho que você é a pessoa (ou melhor, o robô) certa para me ajudar. Presta atenção nisso: ",
      "Hey, computador! Tô meio enrolado aqui e pensei que talvez você pudesse me dar uma força com essa pergunta. Dá uma olhada: ",
      "Fala aí, robô sábio e poderoso! Tem um problema que está me incomodando e tenho certeza de que você pode me dar uma mão nisso. O que acha? ",
      "Ei, meu amigo robô! Bateu uma dúvida aqui e achei que você pudesse jogar uma luz nisso. Dá uma conferida nessa pergunta: ",
      "Hey, supercomputador! Sabe aquela pergunta que não quer calar? Pois é, tô contando com a sua expertise para me ajudar. Vamos lá: ",
      "Olá, máquina de respostas! Vamos ver se você consegue decifrar mais essa pergunta que tá me deixando curioso. Dá uma olhada nisso: ",
      "E aí, IA poderosa! Será que você consegue decifrar o enigma por trás desta pergunta? Conto com a sua análise: ",
      "Hey, gênio da lâmpada digital! Tô precisando da sua ajuda novamente para responder a uma pergunta. Vamos nessa: ",
      "Ei, robô das respostas! Lembra de mim? Tenho mais uma pergunta intrigante que acho que você pode resolver. Olha só: ",
      "Olá, entidade virtual! Tenho uma pergunta que me deixou pensativo e acho que você pode me dar uma resposta bacana. Vai nessa: ",
      "Epa, algoritmo incrível! Tô aqui com uma pergunta desafiadora e tenho a impressão de que você pode me ajudar. Confere aí: ",
      "Hey, cérebro eletrônico! Tenho uma pergunta que tá me tirando o sono, e tenho certeza de que você vai poder solucionar. Olha só: ",
      "Fala aí, máquina da sabedoria! Tô aqui com mais uma pergunta para você analisar. Acredito que você vai arrasar na resposta. Dá uma olhada: ",
      "E aí, processador de conhecimento? Tenho mais uma pergunta para desafiar seu poder de resposta. Vai encarar? "
]
    let randomIntro = randomIntroSet[Math.floor(Math.random()*randomIntroSet.length)]    
    console.log(randomIntro)
    this.randomIntro = randomIntro;
  }
}

</script>

<style scoped>
.screen {
  padding-top: 10px;
  padding-left: 80px;
  border: 3px solid white;
  border-radius: 20px;
  background: black;
  margin: 40px;
  width: 100%;
  box-shadow: 0 0 10px black;
}

.terminal-image {
  border-radius: 30px;
}

.input {
  height: 50px;
  width: 50px;
  box-decoration-break: none;
}

p {
  color: white;
  position: relative;
  width: 80%;
}

p::after {
  content: '|'; /* Display a vertical bar as the cursor */
  position: absolute;
  animation: blinkCursor 1s step-start infinite; /* Blinking animation */
  opacity: 0;
  /* Show cursor only when showCursor is true */
  opacity: 1;
  animation: blinkCursor 1s step-start infinite;
}

@keyframes blinkCursor {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
