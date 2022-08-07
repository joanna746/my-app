const initialState = {
  posts: [
    {
      id: '1',
      title: 'Rumianek',
      shortDescription: 'Ułatwia trawienie oraz działa przeciwzapalnie',
      content: 'Rumianek jest delikatną rośliną,która nadaje się do picia.',
      publishedDate: '02-02-2022',
      category:'Trawienie',
      author: 'John Doe',
      
},
{
  id: '2',
  title: 'Czosnek',
  shortDescription: 'Chamuje rozwój bakterii ',
  content: 'Doskonały naturalny antybiotyk,ma działanie przeciwbakteryjne.',
  publishedDate: '03-02-2022',
  category:'Przeciwzapalne',
  author: 'John Doe'
},
{
  id: '3',
  title: 'Skrzyp polny',
  shortDescription: 'Na obfite krwawienia ',
  content: 'Zaburzenia menstruacyjne u mlodych kobiet.',
  publishedDate: '04-02-2022',
  category:'Inne',
  author: 'Miranda May'
},
{
  id: '4',
  title: 'Żurawina',
  shortDescription: 'Idealna na przeziębienia ',
  content: 'Angina.',
  publishedDate: '05-02-2022',
  category:'Przeciwzapalne',
  author: 'Miranda May'
},
],
categories:['Przeciwzapalne', 'Trawienie', 'Inne']
}
export default initialState