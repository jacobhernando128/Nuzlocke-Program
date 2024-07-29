const challengeRadios = document.querySelectorAll('input[name="ChallengeType"]');
const partnerContainer= document.querySelector("#PartnerContainer");
const partnerInput = document.querySelector("#PartnerName");

challengeRadios.forEach(radio => 
{
    radio.addEventListener("change", () => 
    {
        partnerStatus();
    });
});

function partnerStatus()
{
    const challengeStatus = document.querySelector('input[name="ChallengeType"]:checked').value;
    if (challengeStatus == 'Nuzlocke')
    {
        partnerContainer.classList.add('hidden')
        partnerInput.name = '';
    }
    else
    {
        partnerContainer.classList.remove('hidden')
        partnerInput.name = 'PartnerName';
    }
}

partnerStatus();












