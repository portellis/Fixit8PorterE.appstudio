enter.onclick=function(){
  let n1=inptN1.value
  let v1=inptV1.value
  let n2=inptN2.value
  let v2=inptV2.value
  let n3=inptN3.value
  let v3=inptV3.value
  let n4=inptAdv1.value
  let n5=inptAdv2.value
  let v4=inptAdv3.value
  let a1=inptAdj1.value
  let a2=inptAdj2.value
  let a3=inptAdj3.value
 

let madlib = `A ${n1} in Nebraska was arrested this morning after ${v1}ing in front of a ${a1} ${n2}. The perpetrator had a history of ${v2}ing, but no one - not even her ${n3} - ever imagined she'd ${v3} with a ${n4}.
Even her ${n5} was surprised. "I always thought she was ${a2}, but I never thought she'd do something like this."
Either way, we imagine that after witnessing her ${v4}ing with a ${a3} ${n6}, there are probably a whole lot of ${n7}s that are going to need therapy.`

Label1.textContent=madlib