import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";

const products = [
  {
    id: '1',
    name: 'Exfa Herb',
    description: 'ออแกนิคเฮิร์บ',
    price: '950',
    pv: 150,
    category: 'อาหารเสริม',
    image: '/lovable-uploads/246fcd35-1d72-40e1-be65-332cf83c0da0.png',
    benefits: [
      'เสริมสร้างภูมิคุ้มกันและต้านอนุมูลอิสระ',
      'ช่วยลดอาการเหนื่อยง่าย อ่อนเพลีย',
      'ต้านเชื้อไวรัส แบคทีเรีย และเชื้อรา'
    ]
  },
  {
    id: '2',
    name: 'Cha lamoon',
    description: 'ชาละมุน',
    price: '175',
    pv: 25,
    category: 'อาหารเสริม',
    image: '',
    benefits: []
  },
  {
    id: '3',
    name: 'Classic Coffee (10 PCs)',
    description: 'คอฟฟี่คลาสสิค',
    price: '115',
    pv: 15,
    category: 'อาหารเสริม',
    image: '/lovable-uploads/df2e97ca-4f16-417e-89d4-1e315e38280c.png',
    benefits: [
      'ช่วยควบคุมน้ำหนักและเผาผลาญไขมัน',
      'มีใยอาหารช่วยระบบขับถ่าย',
      'บำรุงผิวพรรณด้วยคอลลาเจน'
    ]
  },
  {
    id: '4',
    name: 'World Plant',
    description: 'เวิล์ดแพลนท์',
    price: '700',
    pv: 100,
    category: 'การเกษตร',
    image: '',
    benefits: []
  },
  {
    id: '5',
    name: 'Chitosan',
    description: 'ไคโตซาน',
    price: '390',
    pv: 50,
    category: 'การเกษตร',
    image: '/lovable-uploads/185c4816-ed26-4b13-b93c-ea123d2dfb6f.png',
    benefits: [
      'เสริมภูมิคุ้มกันพืชและป้องกันโรค',
      'ส่งเสริมการเจริญเติบโตของพืชและปรับปรุงโครงสร้างดิน',
      'ช่วยในการงอกของเมล็ดและราก'
    ]
  },
  {
    id: '6',
    name: 'Classic Coffee (1 kg)',
    description: 'กาแฟคลาสสิค',
    price: '550',
    pv: 50,
    category: 'อาหารเสริม',
    image: '/lovable-uploads/df2e97ca-4f16-417e-89d4-1e315e38280c.png',
    benefits: [
      'ช่วยควบคุมน้ำหนักและเผาผลาญไขมัน',
      'มีใยอาหารช่วยระบบขับถ่าย',
      'บำรุงผิวพรรณด้วยคอลลาเจน'
    ]
  },
  {
    id: '7',
    name: 'Naiyana',
    description: 'ไนยนะ',
    price: '1,290',
    pv: 150,
    category: 'อาหารเสริม',
    image: '',
    benefits: []
  },
  {
    id: '8',
    name: 'Choco Biomin',
    description: 'ยาสีฟัน ช็อกโกไบโอมีน',
    price: '495',
    pv: 45,
    category: 'ของใช้ในบ้าน',
    image: '/lovable-uploads/904eb519-62be-4d43-ba89-37b0219ff489.png',
    benefits: [
      'ช่วยบำรุงสุขภาพช่องปากและเหงือก',
      'ลดปัญหาหินปูนและฟันผุ',
      'ทำให้ลมหายใจสดชื่นและฟันแข็งแรง'
    ]
  },
  {
    id: '9',
    name: 'World 3+',
    description: 'ผงซักฟอก เวิล์ด3พลัส',
    price: '250',
    pv: 25,
    category: 'ของใช้ในบ้าน',
    image: '',
    benefits: []
  },
  {
    id: '10',
    name: 'Calcilate',
    description: 'แคลซิเลท',
    price: '950',
    pv: 100,
    category: 'อาหารเสริม',
    image: '/lovable-uploads/1f0f9bdf-7f6f-443b-a2bb-e5f75d496ef9.png',
    benefits: [
      'ลดอาการปวดข้อเข่าและข้ออักเสบ',
      'กระตุ้นการสร้างกระดูกใหม่',
      'ฟื้นฟูอาการโรคเก๊าท์และลดความเสื่อมของกระดูก'
    ]
  },
  {
    id: '11',
    name: 'Honey Gold Soap',
    description: 'สบู่ผึ้งทองคำ',
    price: '690',
    pv: 70,
    category: 'ของใช้ในบ้าน',
    image: '/lovable-uploads/431d0b97-7d79-47ab-82b1-7bd64370091c.png',
    benefits: [
      'ช่วยลดฝ้า กระ จุดด่างดำและริ้วรอย',
      'กระตุ้นคอลลาเจนและอิลาสติน',
      'ปกป้องผิวจากแสงแดด ทำให้ผิวเนียนนุ่มชุ่มชื้น'
    ]
  },
  {
    id: '12',
    name: 'Ginger & Ginseng',
    description: 'สบู่สมุนไพร',
    price: '490',
    pv: 50,
    category: 'ของใช้ในบ้าน',
    image: '/lovable-uploads/0a06087a-6ec2-41e8-9b0a-d88c5c0ae4bd.png',
    benefits: [
      'ช่วยแก้ปัญหาสิวที่หลังและผิวกาย',
      'ขจัดเซลล์ผิวเก่าและแบคทีเรียสะสม',
      'กระตุ้นคอลลาเจนและระงับกลิ่นกาย'
    ]
  },
  {
    id: '13',
    name: 'Balm Tharnaoy',
    description: 'บาล์มทานอยด์',
    price: '600',
    pv: 60,
    category: 'ของใช้ในบ้าน',
    image: '/lovable-uploads/a6e384a2-eac6-4db6-b01a-223ffaf18393.png',
    benefits: [
      'บรรเทาอาการปวดเมื่อยกล้ามเนื้อและข้อต่อ',
      'ใช้ทาเพื่อผ่อนคลายความเมื่อยล้า',
      'ให้ความรู้สึกเย็นสบาย'
    ]
  },
  {
    id: '14',
    name: 'KAMIN MAX',
    description: 'ขมิ้นชันสมุนไพรสำหรับแก้อาการกรดไหลย้อน',
    price: '600',
    pv: 60,
    category: 'อาหารเสริม',
    image: '/lovable-uploads/f5a0d0e4-6022-40e7-bb6e-3bec24f6b836.png',
    benefits: [
      'ลดอาการกรดเกิน, จุกเสียด, ท้องอืด, ท้องเฟ้อ',
      'ปรับสมดุลระบบย่อยอาหาร',
      'ช่วยเพิ่มภูมิต้านทานและลดความเครียด'
    ]
  },
  {
    id: '15',
    name: 'VITA HERBAL RICH',
    description: 'สมุนไพรบำรุงปอด',
    price: '900',
    pv: 100,
    category: 'อาหารเสริม',
    image: '/lovable-uploads/4b213de0-183b-4da5-be7a-d0d8c73c5179.png',
    benefits: [
      'บำรุงการทำงานของปอดและระบบทางเดินหายใจ',
      'ช่วยลดปัญหาจากมลภาวะและอาการไอเรื้อรัง',
      'เสริมสร้างภูมิคุ้มกันให้ร่างกาย'
    ]
  },
  {
    id: '16',
    name: 'หญิงเกษตร',
    description: 'สารปรับปรุงดิน',
    price: '15,000',
    pv: 500,
    category: 'การเกษตร',
    image: '/lovable-uploads/9223787b-8024-4827-8ea9-a5e9723603fa.png',
    benefits: [
      'ปรับสภาพดินให้เป็นกลางและร่วนซุย',
      'เติมอินทรียวัตถุและจุลินทรีย์ที่มีประโยชน์',
      'ยับยั้งโรคในดินและฟื้นฟูต้นพืชหลังการเก็บเกี่ยว'
    ]
  },
  {
    id: '17',
    name: 'Haper-7 Detox',
    description: 'ดีท็อกซ์',
    price: '450',
    pv: 50,
    category: 'อาหารเสริม',
    image: '/lovable-uploads/15e1e520-4f69-413b-812d-96029d6389d5.png',
    benefits: [
      'ล้างสารพิษในร่างกาย',
      'ปรับสมดุลระบบขับถ่าย',
      'ช่วยลดอาการท้องผูก'
    ]
  },
  {
    id: '18',
    name: 'Balancier',
    description: 'บาลานซิเอ้',
    price: '500',
    pv: 100,
    category: 'อาหารเสริม',
    image: '',
    benefits: []
  },
  {
    id: '19',
    name: 'Time Secret Sunscreen',
    description: 'ไทม์ ซีเครท ซันสกรีน',
    price: '450',
    pv: 50,
    category: 'ของใช้ในบ้าน',
    image: '',
    benefits: []
  },
  {
    id: '20',
    name: 'Time Secret Serum',
    description: 'ไทม์ ซีเครท เซรั่ม',
    price: '900',
    pv: 100,
    category: 'ของใช้ในบ้าน',
    image: '',
    benefits: []
  },
  {
    id: '21',
    name: 'CHANULA',
    description: 'แชนนูล่า',
    price: '550',
    pv: 100,
    category: 'อาหารเสริม',
    image: '/lovable-uploads/c783a9df-56b6-4959-bf97-67219b3338d1.png',
    benefits: [
      'ช่วยปรับระดับภูมิคุ้มกันให้สมดุล',
      'ลดการอักเสบในร่างกาย',
      'ช่วยในเรื่องระบบขับถ่ายและลดความอ้วน',
      'อาจช่วยป้องกันมะเร็งลำไส้ได้'
    ]
  },
  {
    id: '22',
    name: 'ไตร-แท็บ',
    description: 'โคเร-เก๊ก',
    price: '500',
    pv: 70,
    category: 'อาหารเสริม',
    image: '',
    benefits: []
  },
  {
    id: '23',
    name: 'เจน-เบค',
    description: 'เฮม-เบส',
    price: '900',
    pv: 90,
    category: 'อาหารเสริม',
    image: '',
    benefits: []
  },
  {
    id: '24',
    name: 'บิว-เวอร์',
    description: 'บัชชอร์',
    price: '500',
    pv: 70,
    category: 'อาหารเสริม',
    image: '',
    benefits: []
  },
  {
    id: '25',
    name: 'เมดาไลด์',
    description: 'เมลาไลท์',
    price: '900',
    pv: 50,
    category: 'อาหารเสริม',
    image: '',
    benefits: []
  },
  {
    id: '26',
    name: 'บาซิทัส',
    description: 'บาซีทัล',
    price: '600',
    pv: 50,
    category: 'อาหารเสริม',
    image: '',
    benefits: []
  },
  {
    id: '27',
    name: 'ทีเอบี-บีทีเอ',
    description: 'ซี-ฟีโอ',
    price: '1,250',
    pv: 110,
    category: 'อาหารเสริม',
    image: '',
    benefits: []
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProductGrid products={products} />
    </div>
  );
};

export default Index;
