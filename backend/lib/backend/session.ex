defmodule Backend.Session do
  use Ecto.Schema
  import Ecto.Changeset

  schema "sessions" do
    field :token, :string
    field :user_id, Ecto.UUID
    field :expires_at, :utc_datetime

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(session, attrs) do
    session
    |> cast(attrs, [:user_id, :token, :expires_at])
    |> validate_required([:user_id, :token, :expires_at])
  end
end
