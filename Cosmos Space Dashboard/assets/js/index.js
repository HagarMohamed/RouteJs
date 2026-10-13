// WRITE YOUR JS CODE HERE

const apiKey = "3sWtUmbdyh2tV7ubqf9CVfiLnmgxdEefbR2kJwFd";

const nasaUrl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + getUtcDate();

const launchUrl = "https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10";

const allPlanetsUrl = "https://solar-system-opendata-proxy.vercel.app/api/planets";




async function fetchData() {
    const response = await fetch(nasaUrl);
    const data = await response.json();
    console.log(data);
    formatToLongDate(data.date);
        const formattedDate = formatToLongDate(data.date);
        

        const apodImage = document.getElementById("apod-image");
        const apodTitle = document.getElementById("apod-title");
        const apodDate = document.getElementById("apod-date");
        const apodExplanation = document.getElementById("apod-explanation");
        const apodDateDetail = document.querySelector("#apod-date-detail .date-text");
        const apodDateInfo = document.getElementById("apod-date-info");
        const apodDataInput = document.querySelector(".date-input-wrapper .text-sm");
        

        apodImage.src = data.hdurl;
        apodTitle.textContent = data.title;
        apodDate.textContent = 'Astronomy Picture of the Day - ' + formattedDate;
        apodExplanation.textContent = data.explanation;
        apodDateDetail.textContent = formattedDate;
        apodDateInfo.textContent = formattedDate;
        apodDataInput.textContent = formattedDate;
        

    }
    
fetchData();


function getUtcDate(date = new Date()) {
  return date.toISOString().split('T')[0];
}

function formatToLongDate(dateStr) {
  const [year, month, day] = dateStr.split('-');
  
  const localDate = new Date(year, month - 1, day);
  
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(localDate);
}





async function fetchLaunchData() {
  const response = await fetch(launchUrl);
  const data = await response.json();
  console.log(data);
  const launches = data.results;

        launches.forEach(launch => {
              const launchCard = document.createElement('div');
              launchCard.innerHTML = `
             <div
              class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer"
            >
              <div
                class="relative h-48 bg-slate-900/50 flex items-center justify-center"
              >
                
                <img src="${launch.image.image_url}" alt="${launch.name}" class="w-full h-full object-cover" />

                <div class="absolute top-3 right-3">
                  <span
                    class="px-3 py-1 bg-green-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold"
                  >
                    ${launch.status.abbrev}
                  </span>
                </div>
              </div>
              <div class="p-5">
                <div class="mb-3">
                  <h4
                    class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors"
                  >
                    ${launch.name}
                  </h4>
                  <p class="text-sm text-slate-400 flex items-center gap-2">
                    <i class="fas fa-building text-xs"></i>
                    ${launch.launch_service_provider.name}
                  </p>
                </div>
                <div class="space-y-2 mb-4">
                  <div class="flex items-center gap-2 text-sm">
                    <i class="fas fa-calendar text-slate-500 w-4"></i>
                    <span class="text-slate-300">${formatUtcDateTime(launch.net).date}</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <i class="fas fa-clock text-slate-500 w-4"></i>
                    <span class="text-slate-300">${formatUtcDateTime(launch.net).time}</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <i class="fas fa-rocket text-slate-500 w-4"></i>
                    <span class="text-slate-300">${launch.rocket.configuration.name}</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
                    <span class="text-slate-300 line-clamp-1">${launch.pad.country.name}, ${launch.pad.country.alpha_3_code}</span>
                  </div>
                </div>
                <div
                  class="flex items-center gap-2 pt-4 border-t border-slate-700"
                >
                  <button
                    class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold"
                  >
                    Details
                  </button>
                  <button
                    class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                  >
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>

           ` 
           document.getElementById("launches-grid").appendChild(launchCard);

        });   

       
       
    }                     

fetchLaunchData();                                                                    



function formatUtcDateTime(isoString) {
  const dateObj = new Date(isoString);

  
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  });

  
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC'
  });

  return {
    date: dateFormatter.format(dateObj),
    time: `${timeFormatter.format(dateObj)} UTC` 
  };
}








function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  
  sections.forEach(section => {
    if (section.dataset.section === sectionId) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });

  navLinks.forEach(link => {
    if (link.dataset.section === sectionId) {
      link.classList.add('bg-blue-500/10', 'text-blue-400');
      link.classList.remove('text-slate-300', 'hover:bg-slate-800');
    } else {
      link.classList.remove('bg-blue-500/10', 'text-blue-400');
      link.classList.add('text-slate-300', 'hover:bg-slate-800');
    }
  });



}



async function fetchAllPlanets() {

    const response = await fetch(allPlanetsUrl);
    const data = await response.json();
    const planets = data.bodies;
    return planets;

}







async function showPlanetDetails(planetId) {

        const planets = await fetchAllPlanets();
        console.log(planets);

        const planet = planets.find(p => p.id === planetId);


        const planetName = document.getElementById("planet-detail-name");
        const planetDescription = document.getElementById("planet-detail-description");
        const planetImage = document.getElementById("planet-detail-image");
        const planetDistance = document.getElementById("planet-distance");
        const planetRadius = document.getElementById("planet-radius");
        const planetMass = document.getElementById("planet-mass");
        const planetDensity = document.getElementById("planet-density");
        const planetOrbitPeriod = document.getElementById("planet-orbital-period");
        const planetRotation = document.getElementById("planet-rotation");
        const planetMoons = document.getElementById("planet-moons");
        const planetGravity = document.getElementById("planet-gravity");


        const planetDiscoverBy = document.getElementById("planet-discoverer");
        const planetDiscoverDate = document.getElementById("planet-discovery-date");
        const planetBodyType = document.getElementById("planet-body-type");
        const planetVolume = document.getElementById("planet-volume");



        const planetPerihelion = document.getElementById("planet-perihelion");
        const planetAphelion = document.getElementById("planet-aphelion");
        const planetEccentricity = document.getElementById("planet-eccentricity");
        const planetInclination = document.getElementById("planet-inclination");
        const planetAxialTilt = document.getElementById("planet-axial-tilt");
        const planetTemperature = document.getElementById("planet-temp");
        const planetEscape = document.getElementById("planet-escape");





        planetName.textContent = planet.name;
        planetDescription.textContent = planet.description;
        planetImage.src = planet.image;
        planetDistance.textContent = planet.semimajorAxis;

        planetRadius.textContent = planet.meanRadius;
        planetMass.textContent = planet.mass.massValue + " x 10^" + planet.mass.massExponent + "kg";
        planetDensity.textContent = planet.density;
        planetOrbitPeriod.textContent = planet.sideralOrbit + " days";
        planetRotation.textContent = planet.sideralRotation;
        planetMoons.textContent = planet.moons.length;
        planetGravity.textContent = planet.gravity;


        planetDiscoverBy.textContent = planet.discoveredBy;
        planetDiscoverDate.textContent = planet.discoveryDate;
        planetBodyType.textContent = planet.bodyType;
        planetVolume.textContent = planet.vol.volExponent + " x " + planet.vol.volValue + "km³";

        

        planetPerihelion.textContent = planet.perihelion;
        planetAphelion.textContent = planet.aphelion;
        planetEccentricity.textContent = planet.eccentricity;
        planetInclination.textContent = planet.inclination;
        planetAxialTilt.textContent = planet.axialTilt;
        planetTemperature.textContent = planet.avgTemp;
        planetEscape.textContent = planet.escape;
    }





