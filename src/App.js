import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import TopMenue from "components/TopMenue/TopMenue";
import SideMenueTop from "components/SideMenue/SideMenueTop";
import SideMenue from "components/SideMenue/SideMenue";
import Article from "components/Article/Article";
import VisualInfo from "components/VisualInfo/VisualInfo";
import { isMobile } from "react-device-detect";

const articleData = {
  title: "Martinique",
  link: "home",
  redirect: `<div style="font-size:100%;line-height:1.6;font-weight:bold;background:transparent;text-align:center;;padding-right: 3em; font-weight: normal; text-align: left">This article <b>may be expanded with text translated from the <a data-text='article redirect link' href="https://fr.wikipedia.org/wiki/Martinique" class="extiw atricle-redirect-link element" title="fr:Martinique">corresponding article</a> in French</b>. &#32;<i><small>(March 2019)</small></i><div>For other uses see here <a data-text='Martinique On Wikiepedia' class='element atricle-redirect-link' href='https://en.wikipedia.org/wiki/Martinique'>Martinique</a></div></div><div class="mw-collapsible-content" style="background:transparent;text-align:left;;">
  `,
  redirectLink: "Martinique",
  summery: `<p class='text-align-justify'><b>Martinique</b> (<span class="rt-commentedText nowrap"><span class="IPA nopopups noexcerpt text-align-justify"><a className='tooltip element' data-text='see reference' href="https://en.wikipedia.org/wiki/Help:IPA/English" title="Help:IPA/English">/<span style="border-bottom:1px dotted"><span title="/ˌ/: secondary stress follows">ˌ</span><span title="&#39;m&#39; in &#39;my&#39;">m</span><span title="/ɑːr/: &#39;ar&#39; in &#39;far&#39;">ɑːr</span><span title="&#39;t&#39; in &#39;tie&#39;">t</span><span title="/ɪ/: &#39;i&#39; in &#39;kit&#39;">ɪ</span><span title="/ˈ/: primary stress follows">ˈ</span><span title="&#39;n&#39; in &#39;nigh&#39;">n</span><span title="/iː/: &#39;ee&#39; in &#39;fleece&#39;">iː</span><span title="&#39;k&#39; in &#39;kind&#39;">k</span></span>/</a></span></span> <a href="/wiki/Help:Pronunciation_respelling_key" title="Help:Pronunciation respelling key"><i title="English pronunciation respelling"><span style="font-size:90%">MAR</span>-tin-<span style="font-size:90%">EEK</span></i></a>, <small>French:&#160;</small><span title="Representation in the International Phonetic Alphabet (IPA)" class="IPA"><a href="/wiki/Help:IPA/French" title="Help:IPA/French">[maʁtinik]</a></span>&#32;<span class="nowrap" style="font-size:85%">(<span class="unicode haudio"><span class="fn"><span style="white-space:nowrap;margin-right:.25em;"><a href="/wiki/File:LL-Q150_(fra)-GrandCelinien-Martinique.wav" title="About this sound"><img alt="About this sound" src="//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Loudspeaker.svg/11px-Loudspeaker.svg.png" decoding="async" width="11" height="11" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Loudspeaker.svg/17px-Loudspeaker.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Loudspeaker.svg/22px-Loudspeaker.svg.png 2x" data-file-width="20" data-file-height="20" /></a></span><a href="//upload.wikimedia.org/wikipedia/commons/b/be/LL-Q150_%28fra%29-GrandCelinien-Martinique.wav" class="internal" title="LL-Q150 (fra)-GrandCelinien-Martinique.wav">listen</a></span></span>)</span>; <a class='element' data-text='Antillean Creole On Wikipedia' href="/wiki/Antillean_Creole" title="Antillean Creole">Martinican Creole</a>: <i lang="gcf" title="Guadeloupean Creole French language text">Matinik</i> or <i lang="gcf" title="Guadeloupean Creole French language text">Matnik</i>)<sup id="cite_ref-4" class="reference"><a href="#cite_note-4">&#91;4&#93;</a></sup> is an <a class='element' data-text='island On Wikipedia' href="/wiki/Island" title="Island">island</a> which is an overseas territorial collectivity of <a class='element' data-text='France On Wikipedia' href="/wiki/France" title="France">France</a>,<sup id="cite_ref-5" class="reference"><a href="#cite_note-5">&#91;5&#93;</a></sup> located in the <a class='element' data-text='Lesser Antilles On Wikipedia' href="/wiki/Lesser_Antilles" title="Lesser Antilles">Lesser Antilles</a> of the West Indies in the eastern <a class='element' data-text='Caribbean Sea On Wikipedia' href="/wiki/Caribbean_Sea" title="Caribbean Sea">Caribbean Sea</a>, with a land area of 1,128 square kilometres (436&#160;sq&#160;mi) and a population of 376,480 inhabitants as of January 2016. One of the <a class='element' data-text='Windward Islands On Wikipedia' href="/wiki/Windward_Islands" title="Windward Islands">Windward Islands</a>, it is directly north of <a class='element' data-text='Saint Lucia On Wikipedia' href="/wiki/Saint_Lucia" title="Saint Lucia">Saint Lucia</a>, northwest of <a class='element' data-text='Barbados On Wikipedia' href="/wiki/Barbados" title="Barbados">Barbados</a> and south of <a class='element' data-text='Dominica On Wikipedia' href="/wiki/Dominica" title="Dominica">Dominica</a>. Martinique is also an Outermost Region (OMR) of <a class='element' data-text='European Union On Wikipedia' href="/wiki/European_Union" title="European Union">European Union</a> as a <a data-text='special territory of the European Union On Wiki' class='element' href="/wiki/Special_member_state_territories_and_the_European_Union" title="Special member state territories and the European Union">special territory of the European Union</a> and the currency in use is the <a class='element' data-text='euro On Wikipedia' href="/wiki/Euro" title="Euro">euro</a>. 
</p><p>Virtually the entire population speaks both <a class='element' data-text='French Language On Wikipedia'  href="/wiki/French_language" title="French language">French</a>, the only official language and Martinican Creole, an <a data-text='Antillean Creole French On Wiki' href="/wiki/Antillean_Creole_French" class=" element mw-redirect" title="Antillean Creole French">Antillean Creole</a>. <sup id="cite_ref-6" class="reference"><a href="#cite_note-6">&#91;6&#93;</a></sup>
</p>`,
};
const articleHistoryData = {
  title: "History",
  link: "history",
  itemSubtitle: "European contact",
  itemContent: `
    <p>Martinique was charted by  <a data-text="Columbus On Wikipedia"  class='element' href="https://en.wikipedia.org/wiki/Christopher_Columbus" title="Christopher Columbus">Columbus <div class='tooltip'>Tooltip</div></a> in 1493, but Spain had little interest in the territory.<sup id="cite_ref-britannica1_7-2" class="reference"><a href="#cite_note-britannica1-7">&#91;7&#93;</a></sup> Christopher Columbus landed on 15 June 1502, after a 21-day <a class='element' data-text='Trade wind On Wiki' href="/wiki/Trade_wind" class="mw-redirect" title="Trade wind">trade wind</a> <a class='element' data-text='Voyages of Christopher Columbus On Wiki' href="/wiki/Voyages_of_Christopher_Columbus" title="Voyages of Christopher Columbus">passage</a>, his fastest ocean voyage.<sup id="cite_ref-britannica1_7-3" class="reference"><a href="#cite_note-britannica1-7">&#91;7&#93;</a></sup> He spent three days there refilling his water casks, bathing and washing laundry.<sup id="cite_ref-9" class="reference"><a href="#cite_note-9">&#91;9&#93;</a></sup>
    </p><p>On 15 September 1635, <a class='element' data-text='Pierre Belain d'Esnambuc On Wiki' href="https://en.wikipedia.org/wiki/Pierre_Belain_d%27Esnambuc" title="Pierre Belain d&#39;Esnambuc">Pierre Belain d'Esnambuc</a>, French governor of the island of <a class='element' data-text='St. Kitts On Wikipedia' href="/wiki/St._Kitts" class="mw-redirect" title="St. Kitts">St. Kitts</a>, landed in the harbour of <a data-text='St. Pierre On Wiki'  href="/wiki/St._Pierre,_Martinique" class="mw-redirect element" title="St. Pierre, Martinique">St. Pierre</a> with 80-150 French settlers after being driven off St. Kitts by the English. D'Esnambuc claimed Martinique for the French King <a data-text='Louis XIII On Wikipedia' class='element' href="/wiki/Louis_XIII" title="Louis XIII">Louis XIII</a> and the French "<a class='element' data-text='Compagnie des Îles de l'Amérique On Wiki' href="/wiki/Compagnie_des_%C3%8Eles_de_l%27Am%C3%A9rique" class="mw-redirect" title="Compagnie des Îles de l&#39;Amérique">Compagnie des Îles de l'Amérique</a>" (Company of the American Islands), and established the first European settlement at Fort Saint-Pierre (now St. Pierre).<sup id="cite_ref-britannica1_7-4" class="reference"><a href="#cite_note-britannica1-7">&#91;7&#93;</a></sup> D'Esnambuc died in 1636, leaving the company and Martinique in the hands of his nephew, <a class='element' data-text='Jacques Dyel du Parquet On Wiki' href="/wiki/Jacques_Dyel_du_Parquet" title="Jacques Dyel du Parquet">Jacques Dyel du Parquet</a>, who in 1637, became governor of the island.<sup id="cite_ref-britannica1_7-5" class="reference"><a href="#cite_note-britannica1-7">&#91;7&#93;</a></sup>
    </p><p>In 1636, in the first of many skirmishes, the indigenous Caribs rose against the settlers to drive them off the island.<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">&#91;<i><a data-text='Wikipedia:Citation needed' class='element' href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (July 2019)">citation needed</span></a></i>&#93;</sup> The French successfully repelled the natives and forced them to retreat to the eastern part of the island, on the Caravelle Peninsula in the region then known as the Capesterre. When the Carib revolted against French rule in 1658, the Governor <a data-text='Charles Houël du Petit Pré On Wiki' class='element' href="/wiki/Charles_Hou%C3%ABl_du_Petit_Pr%C3%A9" title="Charles Houël du Petit Pré">Charles Houël du Petit Pré</a> retaliated with war against them. Many were killed; those who survived were taken captive and expelled from the island. Some Carib had fled to <a class='element' data-text='Dominica On Wikipedia' href="/wiki/Dominica" title="Dominica">Dominica</a> or <a class='element' data-text='Saint Vincent (island) On Wikipedia' href="/wiki/Saint_Vincent_(island)" class="mw-redirect" title="Saint Vincent (island)">St. Vincent</a>, where the French agreed to leave them at peace.<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">&#91;<i><a data-text='This claim needs references to reliable sources. (July 2019)' class='element' href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (July 2019)">citation needed</span></a></i>&#93;</sup>
    </p><p>After the death of du Parquet his widow took over the running of the island, however dislike of her rule led King <a data-text='Louis XIV On Wikipedia' class='element' href="https://en.wikipedia.org/wiki/Louis_XIV" title="Louis XIV">Louis XIV</a> to take over sovereignty of Martinique in 1658.<sup id="cite_ref-britannica1_7-6" class="reference"><a href="#cite_note-britannica1-7">&#91;7&#93;</a></sup> Meanwhile, Dutch Jews, expelled from Portuguese <a data-text='Brazil On Wikipedia' class='element' href="/wiki/Brazil" title="Brazil">Brazil</a>, introduced sugar plantations worked by enslaved Africans to the island in 1654.<sup id="cite_ref-britannica1_7-7" class="reference"><a href="#cite_note-britannica1-7">&#91;7&#93;</a></sup> Large numbers of slaves were imported from Africa to work these plantations.<sup id="cite_ref-britannica1_7-8" class="reference"><a href="#cite_note-britannica1-7">&#91;7&#93;</a></sup>
    </p><p>In 1667 the <a class='element' data-text='Second Anglo-Dutch War On Wiki' href="https://en.wikipedia.org/wiki/Second_Anglo-Dutch_War" title="Second Anglo-Dutch War">Second Anglo-Dutch War</a> spilled out into the Caribbean, with Britain <a class='element' data-text='Battle of Martinique (1667)' href="/wiki/Battle_of_Martinique_(1667)" title="Battle of Martinique (1667)">attacking</a> the pro-Dutch French fleet in Martinique, virtually destroying it and further cementing British pre-eminence in the region.<sup id="cite_ref-10" class="reference"><a href="#cite_note-10">&#91;10&#93;</a></sup> In 1674 the Dutch <a class='element' data-text='Invasion of Martinique (1674) href="/wiki/Invasion_of_Martinique_(1674)" title="Invasion of Martinique (1674)">attempted to conquer</a> the island but were repulsed.<sup id="cite_ref-britannica1_7-9" class="reference"><a href="#cite_note-britannica1-7">&#91;7&#93;</a></sup>
    </p>`,
  itemImg: "./img/titleImg/history.jpg",
};
const articleDataSecondPart = {
  title: "Governance",
  link: "governance",
  redirect: `<div role="note" class="hatnote navigation-not-searchable">Main article: <a data-text='Politics of Martinique On Wiki'  class=' element atricle-redirect-link' href="/wiki/Politics_of_Martinique" title="Politics of Martinique">Politics of Martinique</a></div>
  <div role="note" class="hatnote navigation-not-searchable articl-item-redirect-items "> Further information: <a data-text='Elections in Martinique On Wiki' class='element atricle-redirect-link' href="/wiki/Elections_in_Martinique" title="Elections in Martinique">Elections in Martinique</a></div>`,
  summery: `<h2><span class="mw-headline" id="Governance">Governance</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a data-text='Edit section: Governance' class='element' href="/w/index.php?title=Martinique&amp;action=edit&amp;section=7" title="Edit section: Governance">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
  
  <div class="thumb tright"><div class="thumbinner" style="width:222px;">  <div class="thumbcaption"><div class="magnify"><a data-text='Enlarge On Wikipedia' href="/wiki/File:EU_OCT_and_OMR_map_en.png" class=" element internal" title="Enlarge"></a></div>The <a class='member element' text-data='Special member state territories and the European Union On Wiki' href="/wiki/Special_member_state_territories_and_the_European_Union" title="Special member state territories and the European Union">special territories of the European Union</a></div></div></div>
  <p>Together with <a class='element' data-text='French Guiana On Wikipedia' href="/wiki/French_Guiana" title="French Guiana">French Guiana</a>, Martinique is one of the Special Collectivity <sup id="cite_ref-27" class="reference"><a href="#cite_note-27">&#91;27&#93;</a></sup> (Unique in french) of the French Republic. It is also an <a text-data='Outermost region On Wikipedia' href="/wiki/Outermost_region" class="element mw-redirect" title="Outermost region">outermost region</a> of the <a class='element' data-text='European Union On Wikipedia' href="/wiki/European_Union" title="European Union">European Union</a>. The inhabitants of Martinique are <a class='element' data-text='French On Wikipedia' href="/wiki/France" title="France">French</a> citizens with full <a data-text='political On Wikipedia' href="/wiki/Political" class="element mw-redirect" title="Political">political</a> and <a data-text='Legal On Wikipedia' class='element' href="/wiki/Legal" class="mw-redirect" title="Legal">legal</a> rights. Martinique sends <a data-text='Category:French legislative constituencies of Martinique' class=element href="/wiki/Category:French_legislative_constituencies_of_Martinique" title="Category:French legislative constituencies of Martinique">four deputies</a> to the <a class='element' data-text='National Assembly of France On Wiki' href="/wiki/National_Assembly_of_France" class="mw-redirect" title="National Assembly of France">French National Assembly</a> and two senators to the <a data-text='French Senate On Wikipedia' href="/wiki/Senate_of_France" class="element mw-redirect" title="Senate of France">French Senate</a>.
  </p><p>On January 24, 2010, during a referendum, the inhabitants of Martinique approved by 68.4% the change to be a “Special (Unique) Collectivity" within the framework of article 73 of the French Republic's Constitution. The new council replaces and exercises the powers of both the <a data-text='General Council ' class='element' href="/wiki/Departmental_council_(France)" title="Departmental council (France)">General Council</a> and the <a class='element' data-text='Regional council (France) On Wiki' href="/wiki/Regional_council_(France)" title="Regional council (France)">regional council</a>.
  </p>`,
};
const articleDataTablePart = {
  title: "Demographics",
  link: "demographics",
  redirect: `<div role="note" class="hatnote navigation-not-searchable">Main article: <a class='element' data-text='Demographics of Martinique' href="/wiki/Demographics_of_Martinique" title="Demographics of Martinique">Demographics of Martinique</a></div>`,
  summery: `<h2><span class="mw-headline" id="Demographics">Demographics</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a data-text='Edit section: Demographics' class=element' href="/w/index.php?title=Martinique&amp;action=edit&amp;section=17" title="Edit section: Demographics">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
  <h3><span class="mw-headline" id="Population">Population</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a class='element' data-text='Edit section: Population'  href="/w/index.php?title=Martinique&amp;action=edit&amp;section=18" title="Edit section: Population">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
  <p>Martinique had a population of 385,551 as of January 2013.<sup id="cite_ref-pop_2-5" class="reference"><a href="#cite_note-pop-2">&#91;2&#93;</a></sup> There are an estimated 260,000 people of Martinican origin living in mainland France, most of them in the <a data-text='Paris On Wikipedia' class='element' href="/wiki/Paris" title="Paris">Paris</a> region. Emigration was highest in the 1970s, causing population growth to almost stop, but it is comparatively light today.<sup id="cite_ref-britannica1_7-26" class="reference"><a href="#cite_note-britannica1-7">&#91;7&#93;</a></sup>
  </p>
  <table class="wikitable" style='width:100%'>
  <caption style="font-weight: bold; font-size: 1.1em; margin-bottom: 0.5em">Historical population
  </caption>`,
  table: `<table class="wikitable table table-striped table-bordered table-hover text-center " responsive>

  <tbody><tr>
  <th>1700<br />estimate</th>
  <th>1738<br />estimate</th>
  <th>1848<br />estimate</th>
  <th>1869<br />estimate</th>
  <th>1873<br />estimate</th>
  <th>1878<br />estimate</th>
  <th>1883<br />estimate</th>
  <th>1888<br />estimate</th>
  <th>1893<br />estimate</th>
  <th>1900<br />estimate
  </th></tr>
  <tr>
  <td align="center">24,000</td>
  <td align="center">74,000</td>
  <td align="center">120,400</td>
  <td align="center">152,925</td>
  <td align="center">157,805</td>
  <td align="center">162,861</td>
  <td align="center">167,119</td>
  <td align="center">175,863</td>
  <td align="center">189,599</td>
  <td align="center">203,781
  </td></tr>
  <tr>
  <th>1954<br />census</th>
  <th>1961<br />census</th>
  <th>1967<br />census</th>
  <th>1974<br />census</th>
  <th>1982<br />census</th>
  <th>1990<br />census</th>
  <th>1999<br />census</th>
  <th>2006<br />census</th>
  <th>2011<br />census</th>
  <th>2013<br />census
  </th></tr>
  <tr>
  <td align="center">239,130</td>
  <td align="center">292,062</td>
  <td align="center">320,030</td>
  <td align="center">324,832</td>
  <td align="center">328,566</td>
  <td align="center">359,572</td>
  <td align="center">381,325</td>
  <td align="center">397,732</td>
  <td align="center">392,291</td>
  <td align="center">385,551
  </td></tr>
  <tr>
  <td colspan="20" style="text-align:center;"><small>Official figures from past censuses and <a data-text='INSEE On Wikipedia' href="/wiki/INSEE" class="element mw-redirect" title="INSEE">INSEE</a> estimates</small>
  </td></tr></tbody></table>`,
};

function App() {
  const [isMenueOpen, setMenueOpen] = useState(isMobile ? false : true);
  let flexableColsArticle = isMenueOpen ? 'col-md-6 col-lg-8 col-sm-7 col-xs-12 show-me' : 'col-md-9 col-lg-9 col-sm-9 col-xs-12';
  let flexableColsMenue = isMenueOpen ? 'col-md-3 col-lg-2 col-sm-2 col-xs-12 show-me' : 'hide-me';
  let flexableColInfo = isMenueOpen ? 'col-md-3 col-lg-2 col-sm-2 col-xs-12 show-me' : 'col-md-3 col-lg-3 col-sm-3 col-xs-12';
  return (
    <div>
      <Container fluid>
        <Row className="total-menues-container">
          <Col  md="3" lg="2" sm="2" xs="12">
            <SideMenueTop setMenueOpen={setMenueOpen} trigger={isMenueOpen} />
          </Col>
          <Col md="9" lg="10" sm="10" xs="12">
            <TopMenue />
          </Col>
        </Row>
        <Row>
          <Col className={`${flexableColsMenue} app-sidemenue-padding`}>
            <SideMenue isOpen={isMenueOpen} />
          </Col>
          <Col
            className = {`${ flexableColsArticle } shadow p-3 mb-5 bg-white rounded app-article-shadow`}
          >
            <Article
              articleData={articleData}
              articleDataSecondPart={articleDataSecondPart}
              articleDataTablePart={articleDataTablePart}
              articleHistoryData={articleHistoryData}
            />
          </Col>
          <Col className={flexableColInfo}>
            <VisualInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
