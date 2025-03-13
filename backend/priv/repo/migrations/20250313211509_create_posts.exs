defmodule Backend.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :title, :string
      add :slug, :string
      add :content, :text
      add :published_at, :utc_datetime
      add :author_id, :string

      timestamps(type: :utc_datetime)
    end
  end
end
