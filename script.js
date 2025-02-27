document.addEventListener("DOMContentLoaded", function () {
  const sectionVideos = document.querySelector(".section-2-videos");
  const videos = document.querySelectorAll(".sticky-video");

  const sectionCGM = document.querySelector(".CGM-images");
  const CGMImages = document.querySelectorAll(".sticky-container3 img");

  const sectionNanopore = document.querySelector(".nanopore-videos");
  const nanoporeVideos = document.querySelectorAll(".sticky-video2");

  const sectionNanobead = document.querySelector(".nanobead-images");
  const nanobeadImages = document.querySelectorAll(".sticky-container5 img");

  

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Video Transition Logic
    const sectionVideosTop = sectionVideos.offsetTop;
    const sectionVideosHeight = sectionVideos.offsetHeight;
    // Calculate breakpoints for transitions
    const transition1 = sectionVideosTop + sectionVideosHeight * 0.25;
    const transition2 = sectionVideosTop + sectionVideosHeight * 0.50;
    const transition3 = sectionVideosTop + sectionVideosHeight * 0.75;

    videos.forEach(video => video.style.opacity = "0"); // Hide all videos by default

    if (videos.length >= 4) {
      if (scrollPosition < transition1) {
        videos[0].style.opacity = "1";
      } else if (scrollPosition < transition2) {
        videos[1].style.opacity = "1";
      } else if (scrollPosition < transition3) {
        videos[2].style.opacity = "1";
      } else {
        videos[3].style.opacity = "1";
      }
    }
    
    // CGM Images Transition
    const sectionCGMTop = sectionCGM.offsetTop;
    const sectionCGMHeight = sectionCGM.offsetHeight;
    const CGMTransition1 = sectionCGMTop + sectionCGMHeight * 0.33;
    const CGMTransition2 = sectionCGMTop + sectionCGMHeight * 0.66;

    CGMImages.forEach(img => img.style.opacity = "0");
    if (scrollPosition < CGMTransition1) {
      CGMImages[0].style.opacity = "1";
    } else if (scrollPosition < CGMTransition2) {
      CGMImages[1].style.opacity = "1";
    } else {
      CGMImages[2].style.opacity = "1";
    }

    // Nanopore Videos Transition
    const sectionNanoporeTop = sectionNanopore.offsetTop;
    const sectionNanoporeHeight = sectionNanopore.offsetHeight;
    const nanoporeTransition1 = sectionNanoporeTop + sectionNanoporeHeight * 0.125;
    const nanoporeTransition2 = sectionNanoporeTop + sectionNanoporeHeight * 0.375;
    const nanoporeTransition3 = sectionNanoporeTop + sectionNanoporeHeight * 0.625;

    nanoporeVideos.forEach(video => video.style.opacity = "0");
    if (nanoporeVideos.length >= 4) {
      if (scrollPosition < nanoporeTransition1) {
        nanoporeVideos[0].style.opacity = "1";
      } else if (scrollPosition < nanoporeTransition2) {
        nanoporeVideos[1].style.opacity = "1";
      } else if (scrollPosition < nanoporeTransition3) {
        nanoporeVideos[2].style.opacity = "1";
      } else {
        nanoporeVideos[3].style.opacity = "1";
      }
    }

    // Nanobead Images Transition
    const sectionNanobeadTop = sectionNanobead.offsetTop;
    const sectionNanobeadHeight = sectionNanobead.offsetHeight;
    const nanobeadTransition1 = sectionNanobeadTop + sectionNanobeadHeight * 0.167;
    const nanobeadTransition2 = sectionNanobeadTop + sectionNanobeadHeight * 0.497;

    nanobeadImages.forEach(img => img.style.opacity = "0");
    if (scrollPosition < nanobeadTransition1) {
      nanobeadImages[0].style.opacity = "1";
    } else if (scrollPosition < nanobeadTransition2) {
      nanobeadImages[1].style.opacity = "1";
    } else {
      nanobeadImages[2].style.opacity = "1";
    }

  });
});


function showPopup(side) {
  document.getElementById('left-popup').style.display = 'none';
  document.getElementById('right-popup').style.display = 'none';
  
  if (side === 'left') {
      document.getElementById('left-popup').style.display = 'flex';
  } else {
      document.getElementById('right-popup').style.display = 'flex';
  }
}

function closePopup() {
  document.getElementById('left-popup').style.display = 'none';
  document.getElementById('right-popup').style.display = 'none';
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function toggleReferences() {
  const referencesBox = document.getElementById("references-box");
  if (referencesBox.style.display === "none" || referencesBox.style.display === "") {
      referencesBox.style.display = "flex";
  } else {
      referencesBox.style.display = "none";
  }
}

function closeReferences(event) {
  if (event.target.id === "references-box") {
      document.getElementById("references-box").style.display = "none";
  }
}
