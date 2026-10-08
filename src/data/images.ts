export interface FoodImageItem {
  id: string;
  slotIndex: number;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  defaultUrl: string;
  alt: string;
}

export interface IngredientImageItem {
  id: string;
  slotIndex: number;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  defaultUrl: string;
  alt: string;
}

// 7 Daily Traditional & New Dishes
export const DEFAULT_FOOD_IMAGES: FoodImageItem[] = [
  {
    id: 'food-1',
    slotIndex: 1,
    title: 'Παραδοσιακός Μουσακάς',
    subtitle: 'Χρυσή μπεσαμέλ, μοσχαρίσιος κιμάς & στρώσεις μελιτζάνας',
    tag: 'Το καμάρι μας',
    description: 'Ψημένος αργά στον φούρνο με ολόπαχη βελούδινη κρέμα μπεσαμέλ, καλοψημένες μελιτζάνες και πατάτες με αρωματικό μοσχαρίσιο κιμά.',
    defaultUrl: '/food-1.jpg',
    alt: 'Παραδοσιακός Μουσακάς Ντοματίνι',
  },
  {
    id: 'food-2',
    slotIndex: 2,
    title: 'Σπιτικό Παστίτσιο Φούρνου',
    subtitle: 'Αυθεντική συνταγή με μοσχοκάρυδο και πλούσιο κιμά',
    tag: 'Αγαπημένο Κλασικό',
    description: 'Χοντρό παραδοσιακό μακαρόνι, πλούσιος καλομαγειρεμένος κιμάς και αέρινη κρούστα που ροδίζει μοναδικά.',
    defaultUrl: '/food-2.jpg',
    alt: 'Σπιτικό Παστίτσιο Φούρνου Ντοματίνι',
  },
  {
    id: 'food-3',
    slotIndex: 3,
    title: 'Μοσχαράκι Κοκκινιστό & Γιουβέτσι',
    subtitle: 'Τρυφερό κρέας που λιώνει στο πιρούνι με κριθαράκι',
    tag: 'Αργό Μαγείρεμα',
    description: 'Σιγομαγειρεμένο για ώρες σε σπιτική σάλτσα από ώριμα ντοματίνια, κανέλα, μπαχάρι και παρθένο ελαιόλαδο.',
    defaultUrl: '/food-3.jpg',
    alt: 'Μοσχαράκι Κοκκινιστό Γιουβέτσι Ντοματίνι',
  },
  {
    id: 'food-4',
    slotIndex: 4,
    title: 'Γεμιστά με Ρύζι & Φρέσκα Μυρωδικά',
    subtitle: 'Ντομάτες και πιπεριές ψημένες με έξτρα παρθένο ελαιόλαδο',
    tag: 'Μυρωδιές Εποχής',
    description: 'Γλυκά ντοματίνια και πιπεριές γεμισμένες με ρύζι, δυόσμο, μαϊντανό και τραγανές πατατούλες φούρνου.',
    defaultUrl: '/food-4.jpg',
    alt: 'Παραδοσιακά Γεμιστά Ντοματίνι',
  },
  {
    id: 'food-5',
    slotIndex: 5,
    title: 'Σουτζουκάκια Σμυρναίικα',
    subtitle: 'Αρωματισμένα με κύμινο σε πλούσια κόκκινη σάλτσα',
    tag: 'Μικρασιάτικη Παράδοση',
    description: 'Αφράτα χειροποίητα σουτζουκάκια πλασμένα στο χέρι, δεμένα με μεστή σάλτσα σκόρδου και φρέσκιας ντομάτας.',
    defaultUrl: '/food-5.jpg',
    alt: 'Σουτζουκάκια Σμυρναίικα Ντοματίνι',
  },
  {
    id: 'food-6',
    slotIndex: 6,
    title: 'Γιουβαρλάκια Αυγολέμονο',
    subtitle: 'Βελούδινος ζωμός με αφράτα μοσχαρίσια κεφτεδάκια',
    tag: 'Σπιτική Θαλπωρή',
    description: 'Απαλή, κρεμώδης σούπα αυγολέμονο με φρέσκο άνηθο και μοσχομυριστά κεφτεδάκια με ρύζι.',
    defaultUrl: '/food-6.jpg',
    alt: 'Γιουβαρλάκια Αυγολέμονο Ντοματίνι',
  },
  {
    id: 'food-7',
    slotIndex: 7,
    title: 'Χωριάτικη Σαλάτα με Ντοματίνια',
    subtitle: 'Γλυκά ντοματίνια, βαρελίσια φέτα, ρίγανη & ελιές Καλαμών',
    tag: 'Αγνή Δροσιά',
    description: 'Η αυθεντική ελληνική γεύση με τα πιο γλυκά ντοματίνια της εποχής, τραγανό αγγούρι και άφθονο αγνό ελαιόλαδο.',
    defaultUrl: '/food-7.jpg',
    alt: 'Χωριάτικη Σαλάτα Ντοματίνια',
  },
];

// 4 Quality Ingredients & Craft Photos
export const DEFAULT_INGREDIENT_IMAGES: IngredientImageItem[] = [
  {
    id: 'ingredient-1',
    slotIndex: 1,
    title: '100% Έξτρα Παρθένο Ελαιόλαδο',
    subtitle: 'Ο χρυσός της ελληνικής γης σε κάθε μας παρασκευή',
    tag: 'Αγνό & Ακατέργαστο',
    description: 'Δεν χρησιμοποιούμε ποτέ σπορέλαια ή τεχνητά λίπη. Κάθε ταψί και κατσαρόλα μαγειρεύεται αποκλειστικά με εξαιρετικό παρθένο ελαιόλαδο.',
    defaultUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1400&q=85',
    alt: 'Αγνό Ελληνικό Ελαιόλαδο',
  },
  {
    id: 'ingredient-2',
    slotIndex: 2,
    title: 'Ζουμερά Ντοματίνια & Φρέσκα Λαχανικά',
    subtitle: 'Διαλεγμένα ένα-ένα από τοπικούς παραγωγούς',
    tag: 'Καθημερινή Παραλαβή',
    description: 'Τα λαχανικά μας καταφθάνουν κάθε ξημέρωμα ολόφρεσκα. Από τα ζουμερά ντοματίνια έως τα τραγανά κολοκυθάκια και τα άγρια χόρτα.',
    defaultUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1400&q=85',
    alt: 'Φρέσκα Ντοματίνια και Λαχανικά',
  },
  {
    id: 'ingredient-3',
    slotIndex: 3,
    title: 'Εκλεκτά Νωπά Κρέατα & Κιμάδες',
    subtitle: 'Χωρίς συντηρητικά, κομμένα και πλασμένα την ίδια μέρα',
    tag: 'Πιστοποιημένη Ποιότητα',
    description: 'Επιλέγουμε μόνο νωπά κρέατα άριστης ποιότητας. Τα μπιφτέκια και τα σουτζουκάκια μας πλάθονται στο χέρι κάθε πρωί χωρίς κανένα πρόσθετο.',
    defaultUrl: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1400&q=85',
    alt: 'Εκλεκτά Νωπά Κρέατα',
  },
  {
    id: 'ingredient-4',
    slotIndex: 4,
    title: 'Αργό Σιγομαγείρεμα στις Κατσαρόλες',
    subtitle: 'Όπως παλιά — με υπομονή, μεράκι και σπιτική αγάπη',
    tag: 'Η Τέχνη του Μαγειρευτού',
    description: 'Δεν βιαζόμαστε. Οι σάλτσες δένουν αργά, οι ζωμοί αποκτούν βάθος και τα φαγητά αποθηκεύουν όλη τη θαλπωρή του σπιτικού φαγητού.',
    defaultUrl: '/cooking-pot.jpg',
    alt: 'Σιγομαγείρεμα φαγητού στην κατσαρόλα',
  },
];
