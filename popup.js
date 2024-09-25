const easySentences = [
  { fr: "Bonjour.", en: "Hello." },
  { fr: "Comment ça va ?", en: "How are you?" },
  { fr: "Je m'appelle Marie.", en: "My name is Marie." },
  { fr: "Où est la bibliothèque ?", en: "Where is the library?" },
  { fr: "J'aime le chocolat.", en: "I like chocolate." },
  { fr: "C'est un beau jour.", en: "It's a nice day." },
  { fr: "Je veux un café.", en: "I want a coffee." },
  { fr: "Il fait chaud aujourd'hui.", en: "It's hot today." },
  { fr: "J'ai un chien.", en: "I have a dog." },
  { fr: "Tu es mon ami.", en: "You are my friend." },
  { fr: "Quelle heure est-il ?", en: "What time is it?" },
  { fr: "Je suis fatigué.", en: "I am tired." },
  { fr: "C'est ma maison.", en: "This is my house." },
  { fr: "J'aime lire.", en: "I like to read." },
  { fr: "Où sont les toilettes ?", en: "Where is the bathroom?" },
  { fr: "Je vais au marché.", en: "I am going to the market." },
  { fr: "Il y a un chat.", en: "There is a cat." },
  { fr: "Nous sommes en vacances.", en: "We are on vacation." },
  { fr: "J'écoute de la musique.", en: "I am listening to music." },
  { fr: "Je mange une pomme.", en: "I am eating an apple." },
  { fr: "Bonjour, je m'appelle Paul.", en: "Hello, my name is Paul." },
  { fr: "J'habite à Paris.", en: "I live in Paris." },
  { fr: "J'aime le football et la musique.", en: "I like football and music." },
  { fr: "Je travaille comme enseignant.", en: "I work as a teacher." },
  { fr: "Je suis ici pour apprendre l'anglais.", en: "I am here to learn English." },
  // ... autres phrases simples
];

const mediumSentences = [
  { fr: "Quel temps fait-il aujourd'hui ?", en: "What is the weather like today?" },
  { fr: "J'aime beaucoup lire des livres.", en: "I really like reading books." },
  { fr: "Où se trouve la bibliothèque ?", en: "Where is the library?" },
  { fr: "Je vais au marché demain.", en: "I am going to the market tomorrow." },
  { fr: "As-tu déjà visité Paris ?", en: "Have you ever visited Paris?" },
  { fr: "Il est important de bien manger.", en: "It is important to eat well." },
  { fr: "Les enfants jouent dans le parc.", en: "The children are playing in the park." },
  { fr: "Je voudrais un café, s'il vous plaît.", en: "I would like a coffee, please." },
  { fr: "Comment s'appelle ton meilleur ami ?", en: "What is your best friend's name?" },
  { fr: "Je vais faire une promenade cet après-midi.", en: "I will take a walk this afternoon." },
  { fr: "Quelle est ta couleur préférée ?", en: "What is your favorite color?" },
  { fr: "Il y a un film intéressant au cinéma.", en: "There is an interesting movie at the cinema." },
  { fr: "Je préfère le thé au café.", en: "I prefer tea to coffee." },
  { fr: "Nous avons beaucoup de devoirs à faire.", en: "We have a lot of homework to do." },
  { fr: "Est-ce que tu aimes la musique ?", en: "Do you like music?" },
  { fr: "Ils habitent dans une grande maison.", en: "They live in a big house." },
  { fr: "Je veux apprendre à jouer du piano.", en: "I want to learn to play the piano." },
  { fr: "Elle travaille dans un bureau.", en: "She works in an office." },
  { fr: "Les fruits et légumes sont bons pour la santé.", en: "Fruits and vegetables are good for your health." },
  { fr: "Je vais acheter des vêtements ce week-end.", en: "I am going to buy clothes this weekend." },
  { fr: "Le train part à quelle heure ?", en: "What time does the train leave?" },
  { fr: "Je suis passionné par la photographie et j'adore capturer des moments spéciaux.", en: "I am passionate about photography and I love capturing special moments." },
  { fr: "Actuellement, je travaille comme développeur web et je suis toujours à la recherche de nouveaux défis.", en: "Currently, I work as a web developer and I am always looking for new challenges." },
  { fr: "Dans mes temps libres, j'aime lire des romans et explorer de nouveaux endroits.", en: "In my free time, I enjoy reading novels and exploring new places." },
  { fr: "J'ai étudié le marketing et j'espère appliquer mes connaissances dans un poste créatif.", en: "I studied marketing and I hope to apply my knowledge in a creative position." },
  { fr: "Je suis originaire de Paris, mais j'ai vécu dans plusieurs villes à travers le monde.", en: "I am originally from Paris, but I have lived in several cities around the world." },
  // ... autres phrases de niveau moyen
];

const hardSentences = [
  { fr: "Il est essentiel de respecter les délais pour ce projet.", en: "It is essential to meet the deadlines for this project." },
  { fr: "Les progrès technologiques ont transformé notre quotidien.", en: "Technological advancements have transformed our daily lives." },
  { fr: "L'environnement joue un rôle crucial dans notre santé.", en: "The environment plays a crucial role in our health." },
  { fr: "Il est important de comprendre les différentes cultures.", en: "It is important to understand different cultures." },
  { fr: "La lecture est un excellent moyen d'élargir ses horizons.", en: "Reading is an excellent way to broaden one's horizons." },
  { fr: "Les océans couvrent une grande partie de notre planète.", en: "Oceans cover a large part of our planet." },
  { fr: "La communication efficace est essentielle dans les relations professionnelles.", en: "Effective communication is essential in professional relationships." },
  { fr: "Les défis mondiaux nécessitent des solutions innovantes.", en: "Global challenges require innovative solutions." },
  { fr: "La pollution de l'air a des effets néfastes sur la santé.", en: "Air pollution has harmful effects on health." },
  { fr: "L'éducation est la clé pour un avenir meilleur.", en: "Education is the key to a better future." },
  { fr: "Il est nécessaire de promouvoir le développement durable.", en: "It is necessary to promote sustainable development." },
  { fr: "Les entreprises doivent s'adapter aux changements du marché.", en: "Companies must adapt to market changes." },
  { fr: "La créativité est un atout précieux dans tous les domaines.", en: "Creativity is a valuable asset in all fields." },
  { fr: "La technologie évolue à un rythme rapide.", en: "Technology is evolving at a rapid pace." },
  { fr: "Le changement climatique affecte les écosystèmes du monde entier.", en: "Climate change is affecting ecosystems worldwide." },
  { fr: "Les réseaux sociaux ont changé la façon dont nous interagissons.", en: "Social media has changed the way we interact." },
  { fr: "Il est crucial de développer des compétences en leadership.", en: "It is crucial to develop leadership skills." },
  { fr: "Les inégalités économiques sont un problème majeur de notre époque.", en: "Economic inequalities are a major problem of our time." },
  { fr: "La santé mentale est tout aussi importante que la santé physique.", en: "Mental health is just as important as physical health." },
  { fr: "Le travail d'équipe est essentiel pour atteindre nos objectifs.", en: "Teamwork is essential to achieving our goals." },
  { fr: "La diversité enrichit notre société et favorise l'innovation.", en: "Diversity enriches our society and fosters innovation." },
  // ... autres phrases difficiles
];

let shuffledSentences = [];
let currentSentenceIndex = -1;
let correctAnswers = 0;
let answerChecked = false;

document.addEventListener('DOMContentLoaded', () => {
  const sentenceElement = document.getElementById('sentence');
  const translationElement = document.getElementById('translation');
  const feedbackElement = document.getElementById('feedback');
  const checkTranslationButton = document.getElementById('checkTranslation');
  const nextSentenceButton = document.getElementById('nextSentence');
  const difficultySelection = document.getElementById('difficultySelection');

  // Fonction pour mettre à jour la barre de progression
  function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressValue = (correctAnswers / shuffledSentences.length) * 100;
    progressBar.value = Math.min(progressValue, 100);
  }

  // Fonction pour charger une nouvelle phrase
  function loadNewSentence() {
    currentSentenceIndex++;
    
    // Vérifiez si toutes les phrases ont été utilisées
    if (currentSentenceIndex >= shuffledSentences.length) {
      feedbackElement.textContent = "Bravo ! Vous avez terminé toutes les phrases ! 🎉";
      feedbackElement.style.color = 'blue';
      nextSentenceButton.style.display = 'none';
      document.getElementById('progressBar').value = 100; // Mettre la barre de progression à 100%
      
      // Réinitialiser les valeurs après 2 secondes
      setTimeout(() => {
        correctAnswers = 0;
        currentSentenceIndex = -1;
        shuffledSentences = []; // Remettre à zéro les phrases mélangées
        translationElement.value = ''; // Vider la zone de texte
        document.getElementById('progressBar').value = 0; // Remise à zéro de la barre de progression
        difficultySelection.style.display = 'block'; // Afficher la sélection de difficulté
        feedbackElement.textContent = ''; // Réinitialiser le message de feedback
      }, 2000);
      return;
    }

    sentenceElement.textContent = shuffledSentences[currentSentenceIndex].fr;
    translationElement.value = '';
    feedbackElement.textContent = '';
    checkTranslationButton.style.display = 'block';
    nextSentenceButton.style.display = 'none';
    answerChecked = false;
  }

  // Vérifier la traduction
  function checkTranslation() {
    const userTranslation = translationElement.value.trim();
    const correctTranslation = shuffledSentences[currentSentenceIndex].en;

    if (userTranslation.toLowerCase() === correctTranslation.toLowerCase()) {
      feedbackElement.textContent = "Correct! 🎉";
      feedbackElement.style.color = 'green';
      correctAnswers++;
      updateProgressBar();
      checkTranslationButton.style.display = 'none';
      nextSentenceButton.style.display = 'block';
    } else {
      feedbackElement.textContent = `Incorrect. La correction est: "${correctTranslation}"`;
      feedbackElement.style.color = 'red';
      checkTranslationButton.style.display = 'none';
      nextSentenceButton.style.display = 'block';
    }
    answerChecked = true;
  }

  // Événements pour vérifier la réponse ou passer à la suivante
  translationElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!answerChecked) {
        checkTranslation();
      } else {
        loadNewSentence();
      }
    }
  });

  nextSentenceButton.addEventListener('click', loadNewSentence);

  // Événements pour la sélection de difficulté
  document.querySelectorAll('.difficulty-button').forEach(button => {
    button.addEventListener('click', (event) => {
      difficultySelection.style.display = 'none'; // Masquer la sélection de difficulté
      if (event.target.id === 'easy') {
        shuffledSentences = shuffleArray([...easySentences]);
      } else if (event.target.id === 'medium') {
        shuffledSentences = shuffleArray([...mediumSentences]);
      } else if (event.target.id === 'hard') {
        shuffledSentences = shuffleArray([...hardSentences]);
      }
      loadNewSentence(); // Charger la première phrase
    });
  });

  // Charger la barre de progression à zéro
  correctAnswers = 0;
  updateProgressBar();
});

// Mélanger le tableau aléatoirement
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
