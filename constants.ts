
import { Question, MbtiProfile, DichotomyLetter, MbtiDimension } from './types.ts';

export const QUESTIONS: Question[] = [
  // EI Dimension (Hướng ngoại/Hướng nội)
  {
    id: 1,
    text: 'Khi ở một bữa tiệc, bạn thường:',
    dimension: MbtiDimension.EI,
    options: [
      { text: 'Tương tác với nhiều người, kể cả người lạ', value: DichotomyLetter.E },
      { text: 'Chủ yếu nói chuyện với những người bạn đã quen', value: DichotomyLetter.I },
    ],
  },
  {
    id: 2,
    text: 'Bạn cảm thấy tràn đầy năng lượng hơn sau khi:',
    dimension: MbtiDimension.EI,
    options: [
      { text: 'Dành thời gian với một nhóm người', value: DichotomyLetter.E },
      { text: 'Dành thời gian yên tĩnh một mình', value: DichotomyLetter.I },
    ],
  },
  {
    id: 3,
    text: 'Trong các cuộc thảo luận nhóm, bạn có xu hướng:',
    dimension: MbtiDimension.EI,
    options: [
      { text: 'Nói nhiều và dễ dàng chia sẻ ý kiến', value: DichotomyLetter.E },
      { text: 'Lắng nghe nhiều hơn và suy nghĩ kỹ trước khi nói', value: DichotomyLetter.I },
    ],
  },
   {
    id: 4,
    text: 'Bạn thích làm việc trong một môi trường:',
    dimension: MbtiDimension.EI,
    options: [
      { text: 'Năng động, nhiều tương tác xã hội', value: DichotomyLetter.E },
      { text: 'Yên tĩnh, ít bị làm phiền', value: DichotomyLetter.I },
    ],
  },
  {
    id: 5,
    text: 'Khi cần nạp lại năng lượng, bạn chọn:',
    dimension: MbtiDimension.EI,
    options: [
      { text: 'Gặp gỡ bạn bè hoặc tham gia hoạt động xã hội', value: DichotomyLetter.E },
      { text: 'Ở nhà đọc sách hoặc làm việc cá nhân', value: DichotomyLetter.I },
    ],
  },

  // SN Dimension (Giác quan/Trực giác)
  {
    id: 6,
    text: 'Khi học điều gì mới, bạn thích:',
    dimension: MbtiDimension.SN,
    options: [
      { text: 'Tập trung vào các sự kiện và chi tiết cụ thể', value: DichotomyLetter.S },
      { text: 'Hiểu bức tranh toàn cảnh và các khả năng', value: DichotomyLetter.N },
    ],
  },
  {
    id: 7,
    text: 'Bạn có xu hướng tin tưởng hơn vào:',
    dimension: MbtiDimension.SN,
    options: [
      { text: 'Kinh nghiệm thực tế và những gì bạn có thể thấy, chạm vào', value: DichotomyLetter.S },
      { text: 'Linh cảm, trực giác và những ý tưởng bất chợt', value: DichotomyLetter.N },
    ],
  },
  {
    id: 8,
    text: 'Trong công việc, bạn thích:',
    dimension: MbtiDimension.SN,
    options: [
      { text: 'Giải quyết các vấn đề thực tế, có phương pháp rõ ràng', value: DichotomyLetter.S },
      { text: 'Tìm kiếm các giải pháp sáng tạo, đổi mới', value: DichotomyLetter.N },
    ],
  },
  {
    id: 9,
    text: 'Khi mô tả một sự kiện, bạn thường:',
    dimension: MbtiDimension.SN,
    options: [
      { text: 'Kể lại chi tiết, theo trình tự thời gian', value: DichotomyLetter.S },
      { text: 'Tập trung vào ý nghĩa hoặc ẩn ý của sự kiện', value: DichotomyLetter.N },
    ],
  },
  {
    id: 10,
    text: 'Bạn quan tâm nhiều hơn đến:',
    dimension: MbtiDimension.SN,
    options: [
      { text: 'Những gì đang hiện hữu và thực tế', value: DichotomyLetter.S },
      { text: 'Những gì có thể xảy ra hoặc tiềm năng', value: DichotomyLetter.N },
    ],
  },

  // TF Dimension (Lý trí/Tình cảm)
  {
    id: 11,
    text: 'Khi đưa ra quyết định quan trọng, bạn ưu tiên:',
    dimension: MbtiDimension.TF,
    options: [
      { text: 'Phân tích logic và sự thật khách quan', value: DichotomyLetter.T },
      { text: 'Cảm xúc cá nhân và ảnh hưởng đến người khác', value: DichotomyLetter.F },
    ],
  },
  {
    id: 12,
    text: 'Bạn dễ bị thuyết phục hơn bởi:',
    dimension: MbtiDimension.TF,
    options: [
      { text: 'Lập luận logic và có bằng chứng rõ ràng', value: DichotomyLetter.T },
      { text: 'Những câu chuyện cảm động hoặc lời kêu gọi chân thành', value: DichotomyLetter.F },
    ],
  },
  {
    id: 13,
    text: 'Khi phê bình người khác, bạn có xu hướng:',
    dimension: MbtiDimension.TF,
    options: [
      { text: 'Thẳng thắn và tập trung vào vấn đề cần cải thiện', value: DichotomyLetter.T },
      { text: 'Nhẹ nhàng, tế nhị và quan tâm đến cảm xúc của họ', value: DichotomyLetter.F },
    ],
  },
  {
    id: 14,
    text: 'Trong một mối quan hệ, bạn coi trọng:',
    dimension: MbtiDimension.TF,
    options: [
      { text: 'Sự công bằng, hợp lý và tôn trọng lẫn nhau', value: DichotomyLetter.T },
      { text: 'Sự hòa hợp, đồng cảm và hỗ trợ tinh thần', value: DichotomyLetter.F },
    ],
  },
  {
    id: 15,
    text: 'Bạn cảm thấy thoải mái hơn khi:',
    dimension: MbtiDimension.TF,
    options: [
      { text: 'Giữ cái đầu lạnh và khách quan trong mọi tình huống', value: DichotomyLetter.T },
      { text: 'Thể hiện sự đồng cảm và quan tâm đến người khác', value: DichotomyLetter.F },
    ],
  },

  // JP Dimension (Nguyên tắc/Linh hoạt)
  {
    id: 16,
    text: 'Bạn thích cuộc sống của mình:',
    dimension: MbtiDimension.JP,
    options: [
      { text: 'Có kế hoạch, có tổ chức và trật tự', value: DichotomyLetter.J },
      { text: 'Linh hoạt, tự do và thích ứng với thay đổi', value: DichotomyLetter.P },
    ],
  },
  {
    id: 17,
    text: 'Khi làm việc, bạn thường:',
    dimension: MbtiDimension.JP,
    options: [
      { text: 'Hoàn thành công việc trước thời hạn', value: DichotomyLetter.J },
      { text: 'Làm việc tốt nhất dưới áp lực thời gian gần kề', value: DichotomyLetter.P },
    ],
  },
  {
    id: 18,
    text: 'Bạn cảm thấy thoải mái hơn khi:',
    dimension: MbtiDimension.JP,
    options: [
      { text: 'Đã đưa ra quyết định và tuân theo nó', value: DichotomyLetter.J },
      { text: 'Giữ các lựa chọn mở và khám phá nhiều khả năng', value: DichotomyLetter.P },
    ],
  },
  {
    id: 19,
    text: 'Trong các chuyến đi, bạn thích:',
    dimension: MbtiDimension.JP,
    options: [
      { text: 'Lên kế hoạch chi tiết cho mọi hoạt động', value: DichotomyLetter.J },
      { text: 'Để mọi thứ diễn ra tự nhiên và khám phá ngẫu hứng', value: DichotomyLetter.P },
    ],
  },
  {
    id: 20,
    text: 'Bạn thích môi trường làm việc:',
    dimension: MbtiDimension.JP,
    options: [
      { text: 'Có cấu trúc rõ ràng và kỳ vọng cụ thể', value: DichotomyLetter.J },
      { text: 'Năng động, thay đổi và cho phép sự tự do', value: DichotomyLetter.P },
    ],
  },
];

export const MBTI_PROFILES: MbtiProfile[] = [
  // ISTJ
  {
    type: 'ISTJ',
    name: 'Người Thanh Tra (The Inspector)',
    description: 'Thực tế, có trách nhiệm và đáng tin cậy. Họ coi trọng truyền thống và sự ổn định. ISTJ thường rất logic, có tổ chức và làm việc chăm chỉ để hoàn thành nhiệm vụ.',
    traits: ['Có trách nhiệm', 'Logic', 'Tận tâm', 'Truyền thống'],
    preferredCareer: 'Kế toán, Quản lý dự án, Kỹ sư, Luật sư'
  },
  // ISFJ
  {
    type: 'ISFJ',
    name: 'Người Bảo Vệ (The Protector)',
    description: 'Tận tâm, ấm áp và có trách nhiệm. Họ quan tâm sâu sắc đến người khác và luôn sẵn sàng giúp đỡ. ISFJ thường khiêm tốn và làm việc chăm chỉ ở hậu trường.',
    traits: ['Chu đáo', 'Trung thành', 'Có tổ chức', 'Nhạy cảm'],
    preferredCareer: 'Y tá, Giáo viên, Nhân viên xã hội, Quản trị viên'
  },
  // INFJ
  {
    type: 'INFJ',
    name: 'Người Cố Vấn (The Advocate)',
    description: 'Sâu sắc, sáng tạo và có tầm nhìn. Họ có lý tưởng mạnh mẽ và mong muốn tạo ra sự khác biệt tích cực trên thế giới. INFJ thường có trực giác tốt và đồng cảm.',
    traits: ['Lý tưởng', 'Sáng tạo', 'Đồng cảm', 'Quyết đoán'],
    preferredCareer: 'Nhà tâm lý học, Nhà văn, Cố vấn, Nghệ sĩ'
  },
  // INTJ
  {
    type: 'INTJ',
    name: 'Nhà Kiến Tạo (The Architect)',
    description: 'Độc lập, logic và có tư duy chiến lược. Họ thích giải quyết các vấn đề phức tạp và luôn tìm cách cải thiện hệ thống. INTJ thường tự tin và có tầm nhìn xa.',
    traits: ['Chiến lược', 'Độc lập', 'Logic', 'Sáng tạo'],
    preferredCareer: 'Nhà khoa học, Kỹ sư phần mềm, Nhà phân tích chiến lược, Doanh nhân'
  },
  // ISTP
  {
    type: 'ISTP',
    name: 'Nhà Thủ Công (The Crafter)',
    description: 'Thực tế, linh hoạt và thích khám phá. Họ giỏi giải quyết vấn đề một cách thực tế và thích làm việc với tay. ISTP thường trầm lặng và thích phiêu lưu.',
    traits: ['Thực tế', 'Linh hoạt', 'Logic', 'Thích hành động'],
    preferredCareer: 'Kỹ sư cơ khí, Phi công, Lính cứu hỏa, Doanh nhân'
  },
  // ISFP
  {
    type: 'ISFP',
    name: 'Người Nghệ Sĩ (The Artist)',
    description: 'Nhạy cảm, tốt bụng và yêu nghệ thuật. Họ sống trong hiện tại và trân trọng vẻ đẹp xung quanh. ISFP thường khiêm tốn và có gu thẩm mỹ tinh tế.',
    traits: ['Nghệ thuật', 'Nhạy cảm', 'Khiêm tốn', 'Linh hoạt'],
    preferredCareer: 'Nhà thiết kế, Nhạc sĩ, Họa sĩ, Chuyên gia trị liệu'
  },
  // INFP
  {
    type: 'INFP',
    name: 'Người Hòa Giải (The Mediator)',
    description: 'Lý tưởng, trung thành và giàu trí tưởng tượng. Họ quan tâm đến việc giúp đỡ người khác và sống theo giá trị của mình. INFP thường nhạy cảm và sáng tạo.',
    traits: ['Lý tưởng', 'Sáng tạo', 'Trung thành', 'Đồng cảm'],
    preferredCareer: 'Nhà văn, Nhà hoạt động xã hội, Nhà tâm lý học, Giáo viên'
  },
  // INTP
  {
    type: 'INTP',
    name: 'Nhà Tư Tưởng (The Thinker)',
    description: 'Logic, độc đáo và thích khám phá lý thuyết. Họ thích phân tích các ý tưởng phức tạp và tìm kiếm sự thật. INTP thường độc lập và có trí tuệ cao.',
    traits: ['Logic', 'Sáng tạo', 'Độc lập', 'Phân tích'],
    preferredCareer: 'Nhà khoa học, Lập trình viên, Nhà triết học, Giáo sư'
  },
  // ESTP
  {
    type: 'ESTP',
    name: 'Người Doanh Nhân (The Entrepreneur)',
    description: 'Năng động, thực tế và thích hành động. Họ giỏi giải quyết vấn đề một cách nhanh chóng và thích ứng tốt với thay đổi. ESTP thường thích rủi ro và có tài xã giao.',
    traits: ['Năng động', 'Thực tế', 'Linh hoạt', 'Thích phiêu lưu'],
    preferredCareer: 'Doanh nhân, Nhân viên bán hàng, Cảnh sát, Vận động viên'
  },
  // ESFP
  {
    type: 'ESFP',
    name: 'Người Trình Diễn (The Performer)',
    description: 'Hoạt bát, thân thiện và yêu đời. Họ thích là trung tâm của sự chú ý và mang lại niềm vui cho người khác. ESFP thường lạc quan và thích trải nghiệm mới.',
    traits: ['Hoạt bát', 'Thân thiện', 'Lạc quan', 'Thích giao tiếp'],
    preferredCareer: 'Diễn viên, Nhạc sĩ, Chuyên viên PR, Hướng dẫn viên du lịch'
  },
  // ENFP
  {
    type: 'ENFP',
    name: 'Người Truyền Cảm Hứng (The Campaigner)',
    description: 'Nhiệt tình, sáng tạo và giàu trí tưởng tượng. Họ có khả năng truyền cảm hứng cho người khác và thích khám phá những ý tưởng mới. ENFP thường lạc quan và có nhiều mối quan tâm.',
    traits: ['Nhiệt tình', 'Sáng tạo', 'Lạc quan', 'Thích kết nối'],
    preferredCareer: 'Nhà báo, Nhà quảng cáo, Nhà tư vấn, Doanh nhân xã hội'
  },
  // ENTP
  {
    type: 'ENTP',
    name: 'Người Nhìn Xa (The Debater)',
    description: 'Thông minh, nhanh trí và thích tranh luận. Họ thích khám phá các ý tưởng mới và thách thức các quan điểm truyền thống. ENTP thường sáng tạo và có khả năng hùng biện.',
    traits: ['Thông minh', 'Sáng tạo', 'Thích tranh luận', 'Nhanh trí'],
    preferredCareer: 'Luật sư, Nhà tư vấn, Doanh nhân, Nhà phát minh'
  },
  // ESTJ
  {
    type: 'ESTJ',
    name: 'Người Điều Hành (The Executive)',
    description: 'Thực tế, quyết đoán và có tổ chức. Họ thích quản lý và đảm bảo mọi việc được thực hiện một cách hiệu quả. ESTJ thường là những nhà lãnh đạo mạnh mẽ.',
    traits: ['Quyết đoán', 'Có tổ chức', 'Thực tế', 'Trách nhiệm'],
    preferredCareer: 'Quản lý, Giám đốc điều hành, Sĩ quan quân đội, Thẩm phán'
  },
  // ESFJ
  {
    type: 'ESFJ',
    name: 'Người Quan Tâm (The Consul)',
    description: 'Hòa đồng, tận tâm và thích giúp đỡ người khác. Họ coi trọng sự hòa hợp và luôn cố gắng đáp ứng nhu cầu của mọi người. ESFJ thường thân thiện và có trách nhiệm.',
    traits: ['Hòa đồng', 'Tận tâm', 'Có trách nhiệm', 'Thân thiện'],
    preferredCareer: 'Giáo viên, Y tá, Quản lý nhân sự, Chuyên viên tổ chức sự kiện'
  },
  // ENFJ
  {
    type: 'ENFJ',
    name: 'Người Chỉ Dẫn (The Protagonist)',
    description: 'Lôi cuốn, nhiệt tình và có khả năng lãnh đạo bẩm sinh. Họ có khả năng truyền cảm hứng và thúc đẩy người khác phát triển. ENFJ thường đồng cảm và có tầm nhìn.',
    traits: ['Lôi cuốn', 'Nhiệt tình', 'Đồng cảm', 'Có tầm nhìn'],
    preferredCareer: 'Giáo viên, Nhà lãnh đạo, Nhà tư vấn, Chuyên gia PR'
  },
  // ENTJ
  {
    type: 'ENTJ',
    name: 'Nhà Chỉ Huy (The Commander)',
    description: 'Quyết đoán, có tầm nhìn và là nhà lãnh đạo tự nhiên. Họ thích lập kế hoạch và thực hiện các mục tiêu lớn. ENTJ thường tự tin và có khả năng tư duy chiến lược.',
    traits: ['Quyết đoán', 'Chiến lược', 'Tự tin', 'Lãnh đạo'],
    preferredCareer: 'Giám đốc điều hành, Doanh nhân, Nhà tư vấn quản lý, Chính trị gia'
  }
];
