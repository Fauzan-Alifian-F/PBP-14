app.get('/', async (req, res) => {
  const recentBooks = await prisma.book.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      author: true
    }
  });
  
  const authorCount = await prisma.author.count();
  const bookCount = await prisma.book.count();
  
  res.render('pages/index', {
    recentBooks,
    authorCount,
    bookCount
  });
});

app.get('/books', async (req, res) => {
  const books = await prisma.book.findMany({
    include: {
      author: true
    },
    orderBy: {
      title: 'asc'
    }
  });
  
  res.render('pages/books', { books });
});

app.get('/authors', async (req, res) => {
  const authors = await prisma.author.findMany({
    include: {
      books: true
    },
    orderBy: {
      name: 'asc'
    }
  });
  
  res.render('pages/authors', { authors });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});