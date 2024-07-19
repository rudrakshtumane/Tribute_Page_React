import Navbar from "./components/Navbar"
import Middle from "./components/Middle"
import Bio from "./components/Bio";



const App = () => {
  const personData = {
  quote : 'Stock Market will never give you returns if you dont take a chance.',
    bio: 'Harshad Shantilal Mehta (29 July 1954 to 31 December 2001) was an Indian stockbroker and a convicted fraudster. Mehta involvement in the 1992 Indian securities scam (about ₹30,000 Crores) made him infamous as a market manipulator. Of the 27 criminal charges brought against Mehta, he was only convicted of four, before his death (by sudden heart attack) at age 47 in 2001.It was alleged that Mehta engaged in a massive stock manipulation scheme financed by worthless bank receipts, which his firm brokered for "ready forward" transactions between banks. Mehta was convicted by the Bombay High Court and the Supreme Court of Indiafor his part in a financial scandal valued at ₹100 billion (US$1.2 billion) which took place on the Bombay Stock Exchange (BSE). The scandal exposed the loopholes in the Indian banking system and the Bombay Stock Exchange (BSE) transaction system, and consequently the SEBI introduced new rules to cover those loopholes. He was on trial for 9 years, until he died at the end of 2001 from a heart attack.',
    earlyLife : 'Harshad Shantilal Mehta was born on 29 July 1954, at Paneli Moti, Rajkot district, in a Gujarati Jain family. His early childhood was spent in Borivali, where his father was a small-time textile businessman.He did his early study in Janta Public School, Camp 2 Bhilai. A cricket enthusiast, Mehta did not show any special promise in school and came to Mumbai after his schooling for studies and to find work. Mehta completed his B.Com in 1976 from Lala Lajpatrai College, Bombay and worked a number of odd jobs for the next eight years.',
    workLife : 'In his early life, Mehta did jobs, often related to sales, including selling hosiery, cement, and sorting diamonds. Mehta started his career as a salesperson in the Mumbai office of New India Assurance Company Limited (NIACL). During this time, he got interested in the stock market and after a few days, resigned and joined a brokerage firm. In the early 1980s, he moved to a lower-level clerical job at the brokerage firm Harjivandas Nemidas Securities where he worked a jobber for the broker Prasann Pranjivandas Broker who he considered his "Guru".Over a period of ten years, beginning 1980, he served in positions of increasing responsibility at a series of brokerage firms. By 1990, he had risen to a position of prominence in the Indian securities industry, with the media (including popular magazines such as Business Today) touting him as "Amitabh Bachchan of the Stock market".Mehta founded Grow More Research and Asset Management, with the financial assistance of associates, when the BSE auctioned a brokers card  and actively started to trade in 1986. By early 1990, a number of eminent people began to invest in his firm and utilize his services. It was at this time that he began trading heavily in the shares of Associated Cement Company (ACC). The price of shares in the cement company eventually rose from ₹200 to nearly ₹9,000 due to a massive spate of buying from a set of brokers including Mehta. Mehta justified this excessive trading in ACC shares by stating that the stock had been undervalued, and that the market had simply corrected when it revalued the company at a price equivalent to the cost of building a similar enterprise the so-called "replacement cost theory" that he had put forward.',
    fraud : 'Up to the early 90 banks in India were not allowed to invest in the equity markets. However, they were expected to post profits and to retain a certain ratio  of their assets in government fixed interest bonds. Mehta cleverly squeezed capital out of the banking system to address this requirement of banks and pumped this money into the share market. He also promised the banks higher rates of interest, while asking them to transfer the money into his personal account, under the guise of buying securities for them from other banks. At that time, a bank had to go through a broker to buy securities and forward bonds from other banks. Mehta used this money temporarily in his account to buy shares, thus hiking up demand of certain shares (of good established companies like ACC, Sterlite Industries and Videocon) dramatically, selling them off, passing on a part of the proceeds to the bank and kept the rest for himself. This resulted in stocks like ACC (which was trading in 1991 for ₹200/share) skyrocketing to nearly ₹9,000 in just 3 months.Another instrument used in a big way was the bank receipt. In a ready forward deal, securities were not moved back and forth in actuality. Instead, the borrower, i.e. the seller of securities, gave the buyer of the securities a BR. The BR serves as a receipt from the selling bank, and also promises that the buyer will receive the securities they have paid for at the end of the terms.Having figured this out, Mehta needed banks, which could issue fake BRs or BRs not backed by any government securities.Once these fake BRs were issued, they were passed on to other banks and the banks in turn gave money to Mehta, plainly assuming that they were lending against government securities when this was not really the case.[15] He took the price of ACC from ₹200 to ₹9,000 (an increase of 4,400%). Since he had to book profits in the end, the day he sold was the day when the markets crashed.'
  };
  return (
    <>
  <Navbar name="Harshad Mehta : The Big Bull"></Navbar>
    <Middle quote = {personData.quote} ></Middle>
    <Bio bio = {personData.bio}
         earlyLife = {personData.earlyLife}
         workLife = {personData.workLife}
         fraud = {personData.fraud}

    ></Bio>
    
  
    </>
  )
}

export default App