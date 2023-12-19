const Footer = () => {
  return (
    <footer class="p-4 bg-neutral text-neutral-content footer-center w-full fixed bottom-0 mt-12">
      <div>
        <p>AdrianCova &copy; 2023</p>
        <div class="grid grid-flow-col gap-4">
          <a
            href="https://github.com/adriancova/me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.091.683-.217.683-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.088 2.911.833.091-.647.349-1.088.635-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.578 9.578 0 0112 6.839c.85.004 1.705.115 2.504.337 1.91-1.293 2.75-1.024 2.75-1.024.545 1.377.202 2.393.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.564 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.182.576.688.478C19.135 20.166 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              >
              </path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
