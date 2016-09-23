var famousPeople = [
  {
    title: "Rapper",
    name: "Chance the Rapper",
    bio: "hancelor Bennett (born April 16, 1993), known professionally as Chance the Rapper, is an American hip hop recording artist from the West Chatham neighborhood of Chicago, Illinois.",
    image: "http://static1.squarespace.com/static/5105d89ee4b0869f6416d903/t/57365362d51cd47f818dd037/1474391876910/?format=1000w",
    lifespan: {
      birth: 1990,
      death: "---"
    }
  },
  {
    title: "Actor",
    name: "Jim Carrey",
    bio: "Jim Carrey, Canadian-born and a U.S. citizen since 2004, is an actor and producer famous for his rubbery body movements and flexible facial expressions.",
    image: "http://cdn04.cdn.justjared.com/wp-content/uploads/headlines/2015/07/jim-carrey-slams-california-new-vaccination-laws2.jpg",
    lifespan: {
      birth: 1974,
      death: "----"
    }
  },
  {
    title: "Football Player",
    name: "DeMarco Murray",
    bio: "DeMarco Murray (born February 12, 1988) is an American football running back for the Tennessee Titans of the National Football League (NFL).",
    image: "https://pbs.twimg.com/media/CeppoPsWIAITiw7.jpg",
    lifespan: {
      birth: 1988,
      death: "----"
    }
  },
  {
    title: "Actor",
    name: "Bill Murray",
    bio: "Bill Murray is an American actor, comedian, and writer. The fifth of nine children, he was born William James Murray in Wilmette, Illinois, to Lucille (Collins), a mailroom clerk, and Edward Joseph Murray II, who sold lumber.",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT67_nQrxEB2cJZ4Qcg0YD4NEk8vmWLJifNX3jiOYSMDbsSNgVH",
    lifespan: {
      birth: 1964,
      death: "----"
    }
  },
  {
    title: "Actor",
    name: "Dwayne, 'The Rock', Johnson",
    bio: "Dwayne Douglas Johnson, also known as The Rock, was born on May 2, 1972 in Hayward, California, to Ata Johnson (born Feagaimaleata Fitisemanu Maivia) and Canadian-born professional wrestler Rocky Johnson (born Wayde Douglas Bowles). His father is black (of Black Nova Scotian descent), and his mother is of Samoan background",
    image: "http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NDg0MDU1MjM5ODg2MzUx.jpg",
    lifespan: {
      birth: 1974,
      death: "----"
    }
  },
  {
    title: "Actor",
    name: "Denzel Washington",
    bio: "Denzel Hayes Washington, Jr. was born on December 28, 1954 in Mount Vernon, New York. He is the middle of three children of a beautician mother, Lennis (Lowe), from Georgia, and a Pentecostal minister father, Denzel Washington, Sr., from Virginia.",
    image: "http://www.blackpast.org/files/blackpast_images/Denzel_Washington__public_domain_.jpg",
    lifespan: {
      birth: 1969,
      death: "----"
    }
  }
];
var userInput = document.getElementById("user-input");
var famousContainer = document.getElementById("famous-container");
var famousCard = document.getElementsByClassName("stars");
var famousBio = '';
for (var i = 0; i < famousPeople.length; i++) {
  famousContainer.innerHTML +=
    `<div class="stars" id="famous-${i}">
      <img src="${famousPeople[i].image}" class="resize">
      <p>Title: ${famousPeople[i].title}</p>
      <p>Name: ${famousPeople[i].name}</p>
      <p>Born: ${famousPeople[i].lifespan.birth} | Died: ${famousPeople[i].lifespan.death}</p>
      <p>Bio: <span id="bio-${i}">${famousPeople[i].bio}</span></p>
    </div>`;
}
function editBiosFocus() {
  for (var i = 0; i < famousCard.length; i++) {
    if (famousCard.item(i).classList.contains("selected")) {
      famousCard.item(i).classList.remove("selected");
    }
  }
  var currentStar = document.getElementById(this.id);
  currentStar.classList.add("selected");
  famousBio = this.id.replace("famous-", "bio-");
  userInput.focus();
  userInput.value = '';
}

for (var i = 0; i < famousCard.length; i++) {
  famousCard.item(i).addEventListener("click", editBiosFocus);
}

function editBios (userInput) {
  document.getElementById(famousBio).innerHTML = userInput;
  console.log(famousBio);
}

userInput.addEventListener("keyup", function() {
  editBios(userInput.value);
});