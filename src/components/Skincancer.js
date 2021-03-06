import React, {useRef} from 'react'
import {Popform} from './popform';
// import scrollToComponent from 'react-scroll-to-component';
import FontAwesome from 'react-fontawesome';
import B5a1 from './img/B5a1.png'
import B5a2 from './img/B5a2.png'
import B5a3 from './img/B5a3.png'
import B5a4 from './img/B5a4.png'

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return null
  }
}
const scrollUpToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-400)

const Skincancer = () => {
    const topRef = useRef(null);
    const executeScroll = () => scrollUpToRef(topRef);
    return (
      <div className="sub_page">
        <ScrollToTopOnMount/>
        <h1 ref={topRef}> ΚΑΡΚΙΝΟΣ του ΔΕΡΜΑΤΟΣ </h1>
        <Popform title={`Ace Athens`} subtitle={'Ρωτήστε την'} openFormButton={'Ρωτήστε μας'} />
        <p>
          Ο μη μελανωτικός καρκίνος του δέρματος που κύρια εκπροσωπείται από το βασικοκυτταρικό και το ακανθοκυτταρικό καρκίνωμα, σχετίζεται άμεσα με την έκθεση στην ηλιακή
          ακτινοβολία. Γι αυτό και απαντάται κυρίως σε μεγαλύτερες ηλικίες, όπου η αθροιστική δράση της υπεριώδους ακτινοβολίας είναι μεγαλύτερη, σε ανοιχτότερο χρώμα δέρματος
          και συνήθως σε εκτεθειμένες στον ήλιο περιοχές του σώματος.
        </p>
        <p>
          Το βασικοκυτταρικό καρκίνωμα εμφανίζεται στο δέρμα, ενώ το ακανθοκυτταρικό τόσο στο δέρμα όσο και στους βλεννογόνους και από τα δύο είναι αυτό που μπορεί να δώσει
          και μεταστάσεις σε άλλα σημεία του σώματος.
        </p>
        <div className="sub_flex">
          <div className="flexitem_a">
            <img src={B5a1} alt="carcinoma1-before" className="img-height-couple" />
            <img src={B5a2} alt="carcinoma1-after" className="img-height-couple" />
            <p><b>Βασικοκυτταρικό καρκίνωμα</b></p>
          </div>
        </div>
        <div className="sub_flex">
          <div className="flexitem_a">
            <img src={B5a3} alt="carcinoma2-before" className="img-height-couple" />
            <img src={B5a4} alt="carcinoma2-after" className="img-height-couple" />
            <p><b>Ακανθοκυτταρικό καρκίνωμα</b></p>
          </div>
        </div>
        <p>
          Αν και αναφέρονται και άλλοι τρόποι θεραπείας, η ενδεικνυόμενη θεραπεία είναι η χειρουργική αφαίρεση και η αποστολή του αφαιρούμενου όγκου για ιστολογική εξέταση.
          Παράλληλα γίνεται σύγκλειση του ελλείμματος και αποκατάσταση της περιοχής, που σε ορισμένες περιοχές του προσώπου όπως είναι το μέτωπο, η περιοφθαλμική περιοχή,
          η μύτη και γύρω από αυτήν, η παρειά, η περιστοματική ζώνη το πηγούνι και το αυτί, οφείλει να είναι πέρα από ανατομική και λειτουργική. Γι αυτό και γίνεται ειδικός
          σχεδιασμός και η αποκατάσταση ανάλογα με τη θέση και την έκταση επιτυγχάνεται με τη χρήση δερματικών «κρημνών» ή ελεύθερων δερματικών μοσχευμάτων. Σε ορισμένες
          περιπτώσεις η αποκατάσταση μπορεί να είναι πιο σύνθετη και κατά στρώματα, ακόμη και με χρήση χόνδρινων μοσχευμάτων όπως για παράδειγμα στο βλέφαρο ή στην περιοχή
          της μύτης.
        </p>
        <p>
          Οι επεμβάσεις μπορεί να γίνουν με τοπική ή γενική αναισθησία, ανάλογα με την τοπογραφία, την έκταση και τη διήθηση της βλάβης και η παραμονή στο νοσοκομείο μπορεί
          να διαρκέσει από μερικές ώρες μέχρι μια μέρα.
        </p>
        <p>
          Επειδή ο δερματικός καρκίνος σχετίζεται με την χρόνια επίδραση της ηλιακής ακτινοβολίας, η παρακολούθηση μετά από μία τέτοια επέμβαση κρίνεται απαραίτητη και σε
          τακτική βάση, αφού μπορεί να εμφανιστούν ανάλογες βλάβες και σε άλλα σημεία  είτε γειτονικά ή πιο απομακρυσμένα και η έγκαιρη διάγνωση και αντιμετώπιση μπορεί να προλάβουν πιο εκτεταμένες και «βαρειές» χειρουργικές επεμβάσεις.
        </p>
        <br/><br/>
        <FontAwesome className='scrollArrowBack' onClick={executeScroll} name='angle-up' data-hover='πίσω στο μενού' spin={false} size='2x' />
        <br/><br/>
      </div>
)};

export default Skincancer
