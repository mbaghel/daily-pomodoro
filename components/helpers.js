// Helper functions for components

// Adds zeroes to numbers below certain length
// https://github.com/expo/pomodoroexp
export function padNumber(num, size) {
  var s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}