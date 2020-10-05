 let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
let memberName = ""

btnMember.onclick=function(){
  let memberName = inptMember.value
  if (members.includes(memberName)) {
    lblMember.hidden = false
    lblMember.textContent = "You are a member!"
   } else {
    lblMember.hidden = false
    lblMember.textContent = "That person is not a member but will be added to the lsit."
    members.push(memberName)
  }
}
