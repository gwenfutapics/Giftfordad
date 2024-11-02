const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
    question.innerHTML = `
    <div class="poem-card">
      <h1>أبي</h1>
      <p>أبي، يا مَنْبَعَ الوجودِ ومصدرَ الحكايات<br>
      يا ظِلَّ الروحِ حين تنطفئُ السنينُ وتشتدُّ العَتَمات</p>
      <p>يا قنديلَ أيامي ووميضَ الطريقِ الموحِش<br>
      كم زرعتَ في قلبي حدائقَ الأملِ وحقولَ الصبرِ والثبات</p>
      <p>كلُّ تجعيدةٍ على جبينِكَ فصلٌ من كتابِ التضحية،<br>
      وكلُّ نظرةٍ صامتةٍ منكَ أغنيةُ حنينٍ تُبكيني في الخلوات</p>
      <p>أبي، كم سافرتَ في دروبِ التعبِ كي نبقى،<br>
      وكم خَضْتَ حروبَ الحياةِ وحدكَ لأجلِ أن نَحْيَا بسلامٍ وطمأنينة</p>
      <p>أنتَ المعنى الخفيُّ للأمانِ حينَ تُظلمُ الطرقات<br>
      وكلُّ حرفٍ في دعائِكَ، دعامةٌ لروحي تنبضُ بالحياة</p>
      <p>فيا شموخَ الصمتِ ويا عظمةَ العطاءِ بلا مقابل<br>
      أحبّك حبًّا يختنقُ في صدري كلما حاولتُ أن أقولَ<br>
      فكلُّ حروفي قاصرةٌ أمامكَ،<br>
      يا أبي… يا حياةً زرعَت فينا الجمالَ رغمَ قسوةِ الحياة</p>
    </div>
  `;
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExanZuOTVxaXlyamt3dW0yNmk0d25pZGQwanJudGQ3ZzBjeTdobXZvNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jOQAaogwUFukoudcaw/giphy.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();}
const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
