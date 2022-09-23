export function useWindoSize () {
    const [size, setSize] = useState([window.innerWidth])
    useEffect(() => {
        const handleResize = () => {
        setSize([window.innerWidth])
        }
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        }
    }, [])

    return size;
}