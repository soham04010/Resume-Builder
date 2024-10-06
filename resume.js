function updatePreview(field, value) {
    document.getElementById(`preview-${field}`).textContent = value;
  }
  
  function addEducation() {
    let eduSection = document.getElementById('education-section');
    let newEdu = document.createElement('div');
    newEdu.innerHTML = `
      <input type="text" placeholder="Degree" oninput="updateEducation()">
      <input type="text" placeholder="School" oninput="updateEducation()">
      <input type="text" placeholder="Year" oninput="updateEducation()">
    `;
    eduSection.appendChild(newEdu);
  }
  
  function updateEducation() {
    let educationInputs = document.querySelectorAll('#education-section input');
    let previewEdu = document.getElementById('preview-education');
    previewEdu.innerHTML = '';
    educationInputs.forEach((input, index) => {
      if ((index + 1) % 3 === 0) previewEdu.innerHTML += `${input.value}<br>`;
      else previewEdu.innerHTML += `${input.value}, `;
    });
  }
  
  function addExperience() {
    let expSection = document.getElementById('experience-section');
    let newExp = document.createElement('div');
    newExp.innerHTML = `
      <input type="text" placeholder="Position" oninput="updateExperience()">
      <input type="text" placeholder="Company" oninput="updateExperience()">
      <input type="text" placeholder="Duration" oninput="updateExperience()">
    `;
    expSection.appendChild(newExp);
  }
  
  function updateExperience() {
    let experienceInputs = document.querySelectorAll('#experience-section input');
    let previewExp = document.getElementById('preview-experience');
    previewExp.innerHTML = '';
    experienceInputs.forEach((input, index) => {
      if ((index + 1) % 3 === 0) previewExp.innerHTML += `${input.value}<br>`;
      else previewExp.innerHTML += `${input.value}, `;
    });
  }
  
  function addSkill() {
    const skillInput = document.getElementById('skill-input');
    const skill = skillInput.value.trim();
    
    if (skill) {
      const skillList = document.getElementById('skills-list');
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      
      skillList.appendChild(skillItem);
      updateSkills();
    }
    
    skillInput.value = ''; // Clear the input field after adding
  }
  
  function updateSkills() {
    const skills = Array.from(document.querySelectorAll('#skills-list li')).map(skill => skill.textContent);
    document.getElementById('preview-skills').textContent = skills.join(', ');
  }
  
  function clearPreview() {
    document.getElementById('resume-preview').reset();
    document.querySelectorAll('#resume-preview p').forEach(p => p.textContent = '');
    document.getElementById('preview-education').textContent = '';
    document.getElementById('preview-experience').textContent = '';
    document.getElementById('preview-skills').textContent = '';
  }
  
  function previewProfilePicture(event) {
    const reader = new FileReader();
    reader.onload = function() {
      const output = document.getElementById('preview-profile-picture');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  