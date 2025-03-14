defmodule Backend.Repo.Migrations.CreateSessions do
  use Ecto.Migration

  def change do
    create table(:sessions) do
      add :user_id, :uuid
      add :token, :string
      add :expires_at, :utc_datetime

      timestamps(type: :utc_datetime)
    end
  end
end
