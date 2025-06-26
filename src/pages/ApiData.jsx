import { useEffect, useState, useRef } from 'react';
import Card from '../components/Card';

const POSTS_PER_PAGE = 10;

function ApiData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const containerRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Filter posts by search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.body.toLowerCase().includes(search.toLowerCase())
  );

  // Reset visibleCount when search changes
  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
  }, [search]);

  // Infinite scroll handler
  useEffect(() => {
    function handleScroll() {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setVisibleCount(count => {
          if (count < filteredPosts.length) {
            return Math.min(count + POSTS_PER_PAGE, filteredPosts.length);
          }
          return count;
        });
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredPosts.length]);

  const currentPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <div className="max-w-3xl mx-auto mt-8" ref={containerRef}>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">API Data (Posts)</h2>
      <input
        className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {loading && <div className="text-gray-500">Loading...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      <div className="grid gap-4 md:grid-cols-2">
        {currentPosts.map(post => (
          <Card key={post.id} className="mb-2">
            <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
            <p className="text-gray-700 text-sm">{post.body}</p>
          </Card>
        ))}
      </div>
      {hasMore && !loading && (
        <div className="text-center text-gray-500 mt-4">Scroll down to load more...</div>
      )}
      {!hasMore && !loading && filteredPosts.length > 0 && (
        <div className="text-center text-green-600 mt-4">All posts loaded.</div>
      )}
    </div>
  );
}

export default ApiData; 