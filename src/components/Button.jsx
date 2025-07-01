const VARIANT_STYLES = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

function Button({ variant = 'primary', className = '', children, ...props }) {
  const base = 'px-4 py-2 rounded font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClass = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;
  return (
    <button className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button; 