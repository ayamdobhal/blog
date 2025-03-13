{
  description = "Minimal Monochrome Blog Webapp";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs { inherit system; };
    in {
      devShell = pkgs.mkShell {
        buildInputs = [
          pkgs.elixir
          pkgs.erlang
          pkgs.nodejs
          pkgs.yarn
          pkgs.postgresql
          pkgs.openssl
          pkgs.pkg-config
          pkgs.direnv
	  pkgs.git
        ];

        shellHook = ''
          export DATABASE_URL=postgres://postgres:postgres@localhost:5432/blog
          echo "Development environment ready!"
          exec zsh
        '';
      };
    });
}

