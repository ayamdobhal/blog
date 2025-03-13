defmodule Backend.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :github_id, :string
      add :username, :string
      add :avatar_url, :string
      add :is_admin, :boolean, default: false, null: false

      timestamps(type: :utc_datetime)
    end
  end
end
