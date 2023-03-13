import { onMounted, onUnmounted } from "vue";

export default function useScroll(reachBottomCB) {
  const scrollListenerHandler = () => {
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    if (clientHeight + scrollTop >= scrollHeight) {
      if (reachBottomCB) reachBottomCB();
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });
}
