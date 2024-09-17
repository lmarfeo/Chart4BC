export default function Forum(data) {
  const main = document.querySelector("main");
  main.innerHTML = `
        <section class="forum">
            <h3>Forum</h3>
            <div>Welcome to the Chart4BC Digital Sticky Wall! Post your questions here and receive a reply from the wall within 24 hours.</div>
        </section>`;

  let id = "1EkchU6zMiP3pSVLOi2hpFUeEGmi5whxHYvxwBnr935Y";
  let gid = "0";
  let url = "https://docs.google.com/spreadsheets/d/" + id + "/gviz/tq?tqx=out:json&tq&gid=" + gid;
  fetch(url)
    .then((response) => response.text())
    .then((data) => (main.innerHTML += processFormsData(data.substring(47).slice(0, -2)))
    );
  function processFormsData(jsonString) {
    const json = JSON.parse(jsonString);
    let ret = `<div id="asm6"><section>`;
    ret += `
        <article class="card"><h2>New question</h2>
        <div>
          <p><span>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_GdaT8tSausr04K8y8dQ5LWBUmlCKVCHklNnShHvncM65uw/viewform?usp=pp_url&entry.1300106493=Your+question+here&entry.1676907438=New+post"
          target="_blank">
          <button>Submit a new question here</button>
          </a>
          </span></p>
        </div>
        </article>
    `
    for (let [idx,p] of json.table.rows.slice().reverse().entries()){
      let date = p.c[0].f;
      date = date.substring(0,date.length-9);
      let type = p.c[1].v;
      let postID = idx;
      let replyID = p.c[2]; //use replyID.v later if not null
      let text = p.c[3].v;
      let adminReply = p.c[4].v;
      if (type === "New post"){
        ret += 
        `<article id="post-${postID}" class="card"><h2>Question on ${date}</h2>
        <div>
          <p><span>Q: ${text}</span></p>
        </div>`
        if (adminReply!= null){
          ret += `
          <footer>
            <p>A: ${adminReply}</p>
          </footer>
          `
        } 
        ret += `</article>`;
      }
      else{
        //outputReply(p);
      }
    }
    ret += `</section></div>`;
    return ret;
  }
}
