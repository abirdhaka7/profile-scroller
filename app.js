

const data = [
  {
    name:'Jhon Doe',
    age: 33,
    gender: 'male',
    lookingfor:'female',
    location:'DownTown',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name:'Mark Hooe',
    age: 33,
    gender: 'male',
    lookingfor:'female',
    location:'Dallas',
    image: 'https://randomuser.me/api/portraits/women/85.jpg'
  },
  {
    name:'Handy Kan',
    age: 33,
    gender: 'male',
    lookingfor:'female',
    location:'Texax',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name:'Randi',
    age: 22,
    gender: 'male',
    lookingfor:'female',
    location:'Texax',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];
const profiles = profileItarator(data);
//Call first Profile
nextProfile();



//Next event

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){

  const currentProfile = profiles.next().value

    if(currentProfile !== undefined){
  document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.lookingfor}</li>
  </ul>
  `;

  document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;

}else{
      //No more profile

      window.location.reload();
  }

};


//Profile Itarator

function profileItarator(profiles){
  let nextIndex = 0;

  return{
    next: function(){
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false} :
      { done: true}
    }
  };
}