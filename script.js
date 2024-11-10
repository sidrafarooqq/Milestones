var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Profile Picture Handling
var resumeImage = document.getElementById("resumeImage");
var inputImage = document.getElementById("inputImage");
inputImage.onchange = function () {
    if (inputImage.files && inputImage.files[0]) {
        resumeImage.src = URL.createObjectURL(inputImage.files[0]);
    }
};
var GenerateResumeButton = document.getElementById("genrateBtn");
var allInputsField = document.querySelectorAll("input[required]");
var checkAllInput = function () {
    var IsValid = true;
    var allFields = document.querySelectorAll("input[required]");
    allFields.forEach(function (field) {
        if (field.value.trim() === "") {
            IsValid = false;
            field.classList.add("error");
        }
        else {
            field.classList.remove("error");
            // field.classList.add('greenClass')
        }
    });
    GenerateResumeButton.disabled = !IsValid;
};
// Resume Variables;
// COntact information Variable resume
var firstUserName = document.getElementById("firstUserName");
var lastUserName = document.getElementById("lastUserName");
var profession = document.getElementById("profession");
var userPhone = document.getElementById("userPhone");
var userEmail = document.getElementById("userEmail");
var userAddress = document.getElementById("userAddress");
var userID = document.getElementById("userID");
// INput fieled Variables
var inputfName = document.getElementById("inputfName");
var inputlName = document.getElementById("inputlName");
var inputProfession = document.getElementById("inputProfession");
var inputNumber = document.getElementById("inputNumber");
var inputEmail = document.getElementById("inputEmail");
var inputCnic = document.getElementById("inputCnic");
var inputAddress = document.getElementById("inputAddress");
// function to allow only numbers or deshes in CNIC FIELD
inputCnic.addEventListener("keypress", function (event) {
    var char = event.key;
    if (!/[0-9-]/.test(char)) {
        event.preventDefault();
    }
});
// AddMoreEducations Function
var AddMoreEducations = function () {
    var AddMoreEdu = document.getElementsByClassName("Education-Section")[0];
    var WrapperDiv = document.createElement("div");
    WrapperDiv.classList.add("inputWrape");
    var inputOne = document.createElement("input");
    inputOne.classList.add("EducationTitle");
    inputOne.setAttribute("placeholder", "Field of study (e.g.,Computer Science)");
    inputOne.setAttribute("type", "text");
    var inputTwo = document.createElement("input");
    inputTwo.classList.add("EducationDetail");
    inputTwo.setAttribute("placeholder", "Degree, institution,and year");
    inputTwo.setAttribute("type", "text");
    WrapperDiv.appendChild(inputOne);
    WrapperDiv.appendChild(inputTwo);
    AddMoreEdu.appendChild(WrapperDiv);
};
// AddMoreExperience Function
var AddMoreExperience = function () {
    var AddMoreExp = document.getElementsByClassName("Experience-Section")[0];
    var WrapperDiv = document.createElement("div");
    WrapperDiv.classList.add("inputWrape");
    var inputOne = document.createElement("input");
    inputOne.classList.add("Experience-title");
    inputOne.setAttribute("placeholder", "Job Title (e.g., Software Engineer)");
    inputOne.setAttribute("type", "text");
    var inputTwo = document.createElement("input");
    inputTwo.classList.add("Experience-detail");
    inputTwo.setAttribute("placeholder", "Company, years, key responsibilities");
    inputTwo.setAttribute("type", "text");
    WrapperDiv.appendChild(inputOne);
    WrapperDiv.appendChild(inputTwo);
    AddMoreExp.appendChild(WrapperDiv);
};
// AddMoreSkill Function
var AddMoreSkills = function () {
    var AddMoreSkill = document.getElementsByClassName("Skills-Section")[0];
    var inputOne = document.createElement("input");
    inputOne.classList.add("Skills-class");
    inputOne.setAttribute("placeholder", "Skill/Expertise (e.g.,HTML,CSS) Enter a single skill here");
    inputOne.setAttribute("type", "text");
    AddMoreSkill.appendChild(inputOne);
};
// education Ul create
var newUlDiv = document.createElement("ul"); //yahan mene new ul create kia hai
newUlDiv.classList.add("education-div");
// experience Ul create
var newUlDiv2 = document.createElement("ul"); //yahan mene new ul create kia hai
newUlDiv.classList.add("experience-div");
// Main Function Of GenerateResume
var GenerateResumeFunction = function (e) {
    e.preventDefault();
    console.log("running");
    // Veriables Injecting Contact Info ANd UserName ANd Profession
    firstUserName.innerText = inputfName.value;
    lastUserName.innerText = inputlName.value;
    profession.innerText = inputProfession.value;
    userPhone.innerText = inputNumber.value;
    userEmail.innerText = inputEmail.value;
    userID.innerText = inputCnic.value;
    console.log(inputCnic.value);
    userAddress.innerText = inputAddress.value;
    var educationsTitle = document.getElementsByClassName("EducationTitle");
    var educationsDetail = document.getElementsByClassName("EducationDetail");
    var TitleArray = __spreadArray([], educationsTitle, true);
    var DetailArray = __spreadArray([], educationsDetail, true);
    var listItems = TitleArray.map(function (title, index) {
        var detail = DetailArray[index] ? DetailArray[index].value : "";
        return "\n        <li class=\"title\">".concat(title.value, "</li>\n        <li class=\"detail\">").concat(detail, "</li>\n      ");
    }).join("");
    if (newUlDiv) {
        newUlDiv.innerHTML = listItems;
    }
    var educationContainer = document.getElementById("education-container");
    educationContainer.appendChild(newUlDiv);
    // experience
    var jobTitle = document.getElementsByClassName("Experience-title");
    var jobDetail = document.getElementsByClassName("Experience-detail");
    var jobTitleArray = __spreadArray([], jobTitle, true);
    var jobDetailArray = __spreadArray([], jobDetail, true);
    var listItemsjob = jobTitleArray
        .map(function (title, index) {
        var detail = jobDetailArray[index] ? jobDetailArray[index].value : "";
        return "\n        <li class=\"title\">".concat(title.value, "</li>\n        <li class=\"detail\">").concat(detail, "</li>\n      ");
    })
        .join("");
    if (newUlDiv2) {
        newUlDiv2.innerHTML = listItemsjob;
    }
    var experiencecontainer = document.getElementById("experience-container");
    experiencecontainer.appendChild(newUlDiv2);
    // SKILLS SECTION
    var skills = document.getElementsByClassName("Skills-class");
    var skillsArray = __spreadArray([], skills, true);
    var skillsLoop = skillsArray
        .map(function (title, index) {
        return "\n        <li>".concat(title.value, "</li>\n      ");
    })
        .join("");
    var skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
        skillsContainer.innerHTML = skillsLoop;
    }
    //Hide container-form input fields if genrated resume button clicked
    var FormContainer = document.getElementById("container-form");
    var ResumeContainer = document.getElementById("container-resume");
    FormContainer.style.display = "none";
    ResumeContainer.style.display = "flex";
    // Sare checkboxes ko select karna jo 'language' name rakhte hain
    var languageCheckboxes = document.querySelectorAll('input[name="language"]');
    // let NewList =  [...languageCheckboxes]
    // Check ki kaunse language check hain
    var languageUl = document.getElementById('language-ul');
    languageUl.innerHTML = ''; // List ko clear kar dena pehle
    languageCheckboxes.forEach(function (li) {
        if (li.checked) {
            var listItem = "<li class=\"language\">".concat(li.value, "</li>");
            languageUl.insertAdjacentHTML('beforeend', listItem); // Append the checked items
        }
    });
}; //generate resume block end
allInputsField.forEach(function (input) {
    input.addEventListener("input", checkAllInput);
});
GenerateResumeButton.disabled = true;
GenerateResumeButton.addEventListener("click", GenerateResumeFunction);
// Print resume Functions
var PrintResume = function () {
    document.title = " ".concat(window.location.origin, "?name=").concat(encodeURIComponent(firstUserName.innerText));
    window.print();
};
// edit resume button
// function
var Edit = function () {
    //Hide container-form input fields if genrated resume button clicked
    var FormContainer = document.getElementById("container-form");
    var ResumeContainer = document.getElementById("container-resume");
    FormContainer.style.display = "flex";
    ResumeContainer.style.display = "none";
};
// delet resume button
// function
var Delete = function () {
    window.location.reload();
};
// shareable link handling
var shareable = function () {
    if (navigator.share) {
        navigator.share({
            title: "".concat(firstUserName.innerText, " Resume"),
            text: "Hey ".concat(firstUserName.innerText, " here is your shareable link"),
            url: "".concat(window.location.href, "/").concat(firstUserName.innerText, "/resume")
        })
            .then(function () { return console.log("Shared successfully!"); })
            .catch(function (error) { return console.error("Error sharing:", error); });
    }
    else {
        alert("Sharing not supported on this browser.");
    }
};
