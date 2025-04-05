{
  description = "nix flake for my personal blog";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }: 
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells.default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs_22
          pkgs.pnpm
	        pkgs.git
        ];
        shellHook = "exec zsh";
      };

      packages.default = pkgs.stdenv.mkDerivation {
        name = "nextjs-blog";
        src = ./.;

        buildInputs = [ pkgs.nodejs_22 pkgs.pnpm ];

        buildPhase = ''
          export HOME=$(mktemp -d)
          pnpm install --frozen-lockfile
          pnpm build
        '';

        installPhase = ''
          mkdir -p $out
          cp -r .next $out/
        '';
      };
    });
}
